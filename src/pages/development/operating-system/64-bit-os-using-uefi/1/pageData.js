import React from "react";
import Text from "../../../../../elements/Text";


const _64BitOSUsingUEFI1 = {
  data: {
    title: "UEFI를 사용한 64비트 운영체제 - 1. GNU-EFI",
    createdate: "2025-01-16",
    editdate: "2025-03-12",
    dir: "/development/operating-system/64-bit-os-using-uefi/1",
    content: (
      <div>
        <h3>들어가는 글</h3>
        <p>이번 글에서는 GNU-EFI 설치와 컴파일을 위한 환경 설정을 하겠습니다.</p>
        <h3>GNU-EFI</h3>
        <p>  
          저번 글에서 UEFI 개발 환경으로 GNU-EFI를 사용한다고 했습니다. 먼저 <a className="link" href="https://sourceforge.net/projects/gnu-efi/files/">이 링크</a>
          에 접속하여 다운받거나 아래 명령어를 입력하여 복제합니다.
        </p>
        <div className="codeblock-body">
          <div className="codeblock-text">
            <div>
              <span>{"git clone https://git.code.sf.net/p/gnu-efi/code gnu-efi"}</span>
            </div>
          </div>
        </div>
        <p>받은 파일을 작업 공간에 옮기고 해당 디렉토리에 들어가 make합니다.</p>
        <p>
          그 다음 Makefile 파일을 만들고 아래와 같이 적어 줍니다:
        </p>
        <div className="codeblock-body">
          <div className="codeblock-text">
            <div>
              <span>{"CC = gcc"}</span><br></br>
              <span>{"CFLAGS = -Ignu-efi/inc -fpic -ffreestanding -fno-stack-protector -fno-stack-check -fshort-wchar -mno-red-zone -maccumulate-outgoing-args"}</span><br></br>
              <span>{"LFLAGS = -shared -Bsymbolic -Lgnu-efi/x86_64/lib -Lgnu-efi/x86_64/gnuefi -Tgnu-efi/gnuefi/elf_x86_64_efi.lds gnu-efi/x86_64/gnuefi/crt0-efi-x86_64.o"}</span><br></br>
              <span>{"OFLAGS = -j .text -j .sdata -j .data -j .rodata -j .dynamic -j .dynsym  -j .rel -j .rela -j .rel.* -j .rela.* -j .reloc --target efi-app-x86_64 --subsystem=10"}</span>
            </div>
          </div>
        </div>
        <p>
          아직은 코드를 작성하지 않았으므로 컴파일에 필요한 변수들만 작성해 놓았습니다.
        </p>
        <p>
          CFLAGS는 gcc용 플래그이고, LFLAGS는 링커용 플래그, OFLAGS는 objcopy용 플래그입니다.
          단순히 컴파일을 위한 위한 코드이므로 자세히 알아 볼 필요는 크게 없습니다.
          자세한 내용은 <a className="link" href="https://wiki.osdev.org/GNU-EFI">이 문서</a>의 Requirements 문단을 참고하세요.
        </p>
        <p>
          다음으로 셸 파일을 하나 만들어 아래와 같이 작성합니다:
        </p>
        <div className="codeblock-body">
          <div className="codeblock-text">
            <div>
              <span className="code-gray">{"# mkdisk.sh"}</span><br></br>
              <span>{"dd if=/dev/zero of=disk.img bs=512 count=4194304"}</span><br></br>
              <span>{"sgdisk disk.img -o"}</span><br></br>
              <span>{"sgdisk disk.img -n 1:2048:+1046528 -t 1:C12A7328-F81F-11D2-BA4B-00A0C93EC93B"}</span><br></br><br></br>
              <span>{"loopback=`losetup --partscan --show --find disk.img`"}</span><br></br>
              <span>{"mkfs.fat -F 32 $loopback"}</span><br></br>
              <span>{"losetup -d $loopback"}</span>
            </div>
          </div>
        </div>
        <p>
          컴파일한 파일을 저장할 가상 디스크를 만드는 코드입니다.
          dd를 이용하여 2GB 크기의 디스크 이미지 파일을 만들고,
          sgdisk를 이용하여 GPT 디스크로 포맷하고 파티션을 생성합니다.
          그리고 디스크 이미지 파일을 루프백 디바이스에 연결한 다음, 해당 디스크 이미지를 FAT32로 포맷합니다(ESP는 반드시 FAT로 포맷되어야 합니다).
        </p>
        <p>
          컴파일한 코드를 가상 디스크에 저장하려면, 루프백 디바이스에 연결한 다음 마운트하고 복사하시면 됩니다.
        </p>
        <h3>Hello, World!</h3>
        <p>
          컴파일 준비가 끝났으니 간단한 코드 하나 작성하고 마칩시다.
        </p>
        <div className="codeblock-body">
          <div className="codeblock-text">
<div>
<span className="code-gray">{"# test.c"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"include"}</span>&nbsp;<span className="code-white">{"<"}</span><span className="code-white">{"efi"}</span><span className="code-white">{"."}</span><span className="code-white">{"h"}</span><span className="code-white">{">"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"include"}</span>&nbsp;<span className="code-white">{"<"}</span><span className="code-white">{"efilib"}</span><span className="code-white">{"."}</span><span className="code-white">{"h"}</span><span className="code-white">{">"}</span><br></br>
<br></br>
<br></br>
<span className="code-white">{"EFI_STATUS"}</span>&nbsp;<span className="code-white">{"EFIAPT"}</span>&nbsp;<span className="code-purple">{"efi_main"}</span><span className="code-blue">{"("}</span><span className="code-white">{"EFI_HANDLE"}</span>&nbsp;<span className="code-white">{"ImageHandle"}</span><span className="code-lightyellow">{","}</span>&nbsp;<span className="code-white">{"EFI_SYSTEM_TABLE"}</span><span className="code-lightyellow">{"*"}</span>&nbsp;<span className="code-white">{"SystemTable"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-blue">{"{"}</span><br></br>
&nbsp;&nbsp;<span className="code-purple">{"InitializeLib"}</span><span className="code-blue">{"("}</span><span className="code-white">{"ImageHandle"}</span><span className="code-lightyellow">{","}</span>&nbsp;<span className="code-white">{"SystemTable"}</span><span className="code-blue">{")"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<br></br>
&nbsp;&nbsp;<span className="code-purple">{"Print"}</span><span className="code-blue">{"("}</span><span className="code-white">{"L"}</span><span className="code-orange">{"\"Hello, World!"}</span><span className="code-yellow">{"\\r"}</span><span className="code-orange">{""}</span><span className="code-yellow">{"\\n"}</span><span className="code-orange">{"\""}</span><span className="code-blue">{")"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
&nbsp;&nbsp;<span className="code-magenta">{"return"}</span>&nbsp;<span className="code-white">{"EFI_SUCCESS"}</span><span className="code-lightyellow">{";"}</span><br></br>
<span className="code-blue">{"}"}</span>
</div>
          </div>
        </div>
        <p>
          Hello, World!를 출력하고 복귀하는 함수입니다. 주의할 점은 EFI에서는 main이 아닌 efi_main으로 메인 함수를 정의해야 합니다.
          또한 EFI에는 상태 개념이 있어, 어떠한 함수가 작업을 마치고 복귀할 때 꼭 해당 함수가 정상 작동했음을 확인하기 위하여 EFI_SUCCESS를 돌려주어야 합니다.
          그리고 EFI에서 제공하는 Print 함수 및 시스템 테이블의 콘솔 출력에 있는 OutputString 함수는 가상머신에서는 정상적으로 작동하나,
          실제 환경에서는 작동하지 않는 경우가 있으니, 추후에 자체적으로 문자열 출력 함수를 제작할 예정입니다.
        </p>
        <p>
          코드를 작성하였으니 Makefile 파일을 수정합시다.
        </p>
        <div className="codeblock-body">
          <div className="codeblock-text">
            <div>
              <span className="code-gray">{"..."}</span><br></br>
              <span>{"TARGET = BOOTX64.EFI"}</span><br></br><br></br><br></br>
              <span>{"all: $(TARGET)"}</span><br></br><br></br>
              <span>{"BOOTX64.EFI : test.so"}</span><br></br>
              <span>{"  objcopy $(OFLAGS) $< $@"}</span><br></br><br></br>
              <span>{"test.so : test.o"}</span><br></br>
              <span>{"  ld $(LFLAGS) $< -o $@ -lgnuefi -lefi"}</span><br></br><br></br>
              <span>{"test.o : test.c"}</span><br></br>
              <span>{"  $(CC) $(CFLAGS) -c $< -o $@"}</span>
            </div>
          </div>
        </div>
        <p>
          콘솔에서 make를 입력하여 컴파일하고 가상 디스크에 복사한 다음,
          QEMU나 Bochs 등의 가상머신을 이용하여 실행하면 화면에 Hello, World!가 뜨는 것을 볼 수 있습니다.
        </p>
        <h3>마치며</h3>
        <p>
          이번 글에서는 GNU-EFI 설치부터 컴파일 환경 설정까지 마쳤습니다. 다음 글에서는 부트로더를 작성해 보겠습니다.
        </p>
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={_64BitOSUsingUEFI1.data.title} createdate={_64BitOSUsingUEFI1.data.createdate} editdate={_64BitOSUsingUEFI1.data.editdate} content={_64BitOSUsingUEFI1.data.content} />
    );
  }  
}

export default _64BitOSUsingUEFI1;
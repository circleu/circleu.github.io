import React from "react";
import Text from "../../../../../elements/Text";

const pageData = {
  "title": "UEFI를 사용한 64비트 운영체제 - 1. 환경 설정 및 간단한 코드 작성",
  "createdate": "2024-11-02 10:00",
  "editdate": "2024-11-04 22:56",
  "content": (
    <div>
      <h3>환경 설정</h3>
      <p>이 글에서는 챕터 0에서 말했다시피 개발 환경으로 <b>GNU-EFI</b>를 사용합니다. <a className="link" href="https://sourceforge.net/projects/gnu-efi/files/">SourceForge</a>에서 다운 받으시거나 아래 명령을 입력하여 리포지토리를 복제할 수 있습니다:</p>
      <div className="codeblock-body">
        <div className="codeblock-text">
          {"git clone https://git.code.sf.net/p/gnu-efi/code gnu-efi"}
        </div>
      </div>

      <p>다운로드가 완료되면 해당 위치로 이동한 다음 터미널에 <span className="codeline">make</span>를 입력하여 컴파일합니다.</p>
      <p>컴파일이 완료된 <b>gnu-efi</b> 폴더를 원하는 위치로 옮기면 환경 설정 끝입니다.</p>

      <h3>코드 작성</h3>
      <p>환경 설정이 완료되었으니 'Hello, World!'를 출력하는 간단한 코드 작성을 해 봅시다.</p>
      <p>src 디렉토리를 만들고 안에 <b>main.c</b> 파일을 만들어 아래와 같이 작성합니다:</p>
      <div className="codeblock-body">
        <div className="codeblock-text">
        <div>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"include"}</span> <span className="code-orange">{"<"}</span><span className="code-orange">{"efi"}</span><span className="code-orange">{"."}</span><span className="code-orange">{"h"}</span><span className="code-orange">{">"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"include"}</span> <span className="code-orange">{"<"}</span><span className="code-orange">{"efilib"}</span><span className="code-orange">{"."}</span><span className="code-orange">{"h"}</span><span className="code-orange">{">"}</span><br></br>
<br></br>
<br></br>
<span className="code-white">{"EFI_STATUS"}</span> <span className="code-white">{"EFIAPI"}</span> <span className="code-purple">{"efi_main"}</span><span className="code-blue">{"("}</span><span className="code-white">{"EFI_HANDLE"}</span> <span className="code-white">{"ImageHandle"}</span><span className="code-lightyellow">{","}</span> <span className="code-white">{"EFI_SYSTEM_TABLE"}</span><span className="code-lightyellow">{"*"}</span> <span className="code-white">{"SystemTable"}</span><span className="code-blue">{")"}</span> <span className="code-blue">{"{"}</span><br></br>
<span>&nbsp;&nbsp;</span><span className="code-purple">{"InitializeLib"}</span><span className="code-blue">{"("}</span><span className="code-white">{"ImageHandle"}</span><span className="code-lightyellow">{","}</span> <span className="code-white">{"SystemTable"}</span><span className="code-blue">{")"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
<span>&nbsp;&nbsp;</span><span className="code-purple">{"Print"}</span><span className="code-blue">{"("}</span><span className="code-white">{"L"}</span><span className="code-orange">{"\"Hello, World!"}</span><span className="code-yellow">{"\\n"}</span><span className="code-orange">{""}</span><span className="code-yellow">{"\\r"}</span><span className="code-orange">{"\""}</span><span className="code-blue">{")"}</span><span className="code-lightyellow">{";"}</span><br></br>
<span>&nbsp;&nbsp;</span><br></br>
<span>&nbsp;&nbsp;</span><span className="code-magenta">{"while"}</span> <span className="code-blue">{"("}</span><span className="code-lightgreen">{"1"}</span><span className="code-blue">{")"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
<span>&nbsp;&nbsp;</span><span className="code-magenta">{"return"}</span> <span className="code-white">{"EFI_SUCCESS"}</span><span className="code-lightyellow">{";"}</span><br></br>
<span className="code-blue">{"}"}</span>
        </div>
        </div>
      </div>

      <p>
        <span className="codeline">{"#include <efilib.h>"}</span>
        는 라이브러리 함수를 가져오겠다는 뜻입니다. <span className="codeline">{"Print"}</span>도 라이브러리 함수 중에 하나입니다.
        라이브러리 함수를 이용하면 코드를 더 간편하게 작성할 수 있습니다. <span className="codeline">{"Print"}</span> 함수 없이 문자열을 출력하려면, <span className="codeline">{"SystemTable->ConOut->OutputString(ConOut, L\"Hello, World!\")"}</span>
        와 같이 코드가 길어집니다 (...)
      </p>
      <p>
        <span className="codeline">{"EFI_STATUS EFIAPI..."}</span> 부분은 <span className="codeline">{"efi_main"}</span> 함수를 정의하는 부분입니다.
        우리가 통상적으로 C 코드를 작성할 때에 <span className="codeline">{"main"}</span> 함수를 선언하고 안에 실행될 내용을 적는 것처럼,
        GNU-EFI에서도 마찬가지로 <span className="codeline">{"efi_main"}</span> 함수를 선언하고 안에 실행될 내용을 적습니다.
      </p>
      <p>
        <span className="codeline">{"EFI_STATUS"}</span>은 UEFI의 <b>Status Code</b>를 나타내는 자료형입니다.
        Status Code는 UEFI나 제조사에 의해 예약된 코드로써, 이는 함수 종료 시 실행 결과에 맞춰 반환됩니다.
        성공적으로 실행했다면 <span className="codeline">{"EFI_SUCCESS"}</span>,
        제대로 실행되지 않고 종료됐거나 오류 발생 우려가 있다면 Error Code나 Warning Code를 반환합니다.
        자세한 내용은 <a className="link" href="https://uefi.org/specifications">UEFI Specification</a> 문서의 Status Codes 항목을 참고하세요.
      </p>
      <p>
        <span className="codeline">{"ImageHandle"}</span>은 현재 EFI 파일이 위치한 디스크의 이미지 핸들입니다.
      </p>
      <p> 
        <span className="codeline">{"SystemTable"}</span>은 부트 서비스, 런타임 서비스 등이 위치한 UEFI 시스템 테이블을 가리키는 포인터입니다.
        이를 통하여 <span className="codeline">{"SystemTable->BootServices->ExitBootServices()"}</span>와 같은 식으로 UEFI 부트 서비스에 접근할 수 있습니다.
      </p>
      <p>
        <span className="codeline">{"Print"}</span> 함수를 보면 문자열 앞에 'L'이 붙어 있습니다. 문자열이 wchar_t 배열임을 나타내는 기호입니다.
        UEFI에서는 문자 인코딩에 UTF-16을 사용하기 때문에 문자 자료형으로 char(1바이트)가 아닌 wchar_t(2바이트)를 사용합니다.
      </p>
      <p>
        마지막에는 <span className="codeline">{"efi_main"}</span>이 잘 작동했음을 알리기 위해 <span className="codeline">{"EFI_SUCCESS"}</span>
        를 반환합니다.
      </p>

      <h3>컴파일 및 실행</h3>
      <p>
        코드를 작성하였으니 이제 컴파일 해봅시다.
        tmp와 result 디렉토리를 만듭니다.
        그리고 Makefile 파일을 만들어 아래와 같이 작성합니다:
      </p>
      <div className="codeblock-body">
        <div className="codeblock-text">
        {"CC = gcc"}<br></br>
        {"CFLAGS = -Ignu-efi/inc -fpic -ffreestanding -fno-stack-protector -fno-stack-check -fshort-wchar -mno-red-zone -maccumulate-outgoing-args"}<br></br>
        {"LFLAGS = -shared -Bsymbolic -Lgnu-efi/x86_64/lib -Lgnu-efi/x86_64/gnuefi -Tgnu-efi/gnuefi/elf_x86_64_efi.lds gnu-efi/x86_64/gnuefi/crt0-efi-x86_64.o"}<br></br>
        {"OFLAGS = -j .text -j .sdata -j .data -j .rodata -j .dynamic -j .dynsym  -j .rel -j .rela -j .rel.* -j .rela.* -j .reloc --target efi-app-x86_64 --subsystem=10"}<br></br>
        <br></br>
        <br></br>
        {"result/BOOTX64.EFI : tmp/boot.so"}<br></br>
        &nbsp;&nbsp;{"objcopy $(OFLAGS) $^ $@"}<br></br>
        <br></br>
        {"tmp/boot.so : tmp/boot.o"}<br></br>
        &nbsp;&nbsp;{"ld $(LFLAGS) $< -o $@ -lgnuefi -lefi"}<br></br>
        <br></br>
        {"tmp/boot.o : src/boot.c"}<br></br>
        &nbsp;&nbsp;{"$(CC) $(CFLAGS) -c $< -o $@"}<br></br>
        <br></br>
        {"clean:"}<br></br>
        &nbsp;&nbsp;{"rm tmp/*.o tmp/*.so result/*.EFI"}
        </div>
      </div>

      <p>
        (코드 설명)
      </p>

      <p>
        컴파일을 완료했으면 이제 디스크 이미지 파일을 만든 다음, 컴파일된 EFI 파일을 옮기고 실행하면 됩니다.
        mkdisk.sh 파일을 만들고 아래와 같이 작성합니다:
      </p>
      <div className="codeblock-body">
        <div className="codeblock-text">
          {"#!/bin/sh"}<br></br>
          <br></br>
          {"dd if=/dev/zero of=disk.img bs=512 count=4194304"}<br></br>
          {"parted disk.img -s -a minimal mklabel gpt"}<br></br>
          {"parted disk.img -s -a minimal mkpart EFI FAT32 2048s 1048575s"}<br></br>
          {"parted disk.img -s -a minimal toggle 1 boot"}<br></br>
          <br></br>
          {"parted disk.img -s -a minimal mkpart primary FAT32 1048576s 2097151s"}
        </div>
      </div>

      <p>
        <span className="codeline">{"dd"}</span> 명령을 이용하여 디스크 이미지 파일을 만듭니다.
        bs는 섹터 당 바이트, count는 섹터 개수입니다.
        따라서 우리는 512*4194304 바이트 = 2 기가바이트 크기의 디스크 이미지 파일을 만들게 됩니다.
      </p>
      <p>
        그리고 GNU Parted를 이용하여 디스크 이미지에 파티션을 생성합니다.
        GPT 테이블을 생성하고 2048번째 섹터부터 1048575섹터까지를 FAT32로 포맷된 EFI 시스템 파티션으로 지정합니다.
        따라서 우리는 1046528개의 섹터, 즉 511 메가바이트 크기의 파티션을 생성하게 됩니다.
        그리고 1048576번째 섹터 부터 끝까지를 FAT32로 포맷된 주 파티션으로 설정합니다.
        따라서 우리는 1048576개의 섹터, 즉 512 메가바이트 크기의 파티션을 생성하게 됩니다.
      </p>
    </div>
  )
}

function _64BitOSUsingUEFI1() {
  return (
    <Text title={pageData.title} createdate={pageData.createdate} editdate={pageData.editdate} content={pageData.content} />
  );
}

export default _64BitOSUsingUEFI1;
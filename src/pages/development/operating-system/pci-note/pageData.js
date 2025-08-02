import React from "react";
import Text from "../../../../elements/Text";


const PCINote = {
  data: {
    title: "PCI 정리",
    createdate: "2025-07-14",
    editdate: "2025-07-14",
    dir: "/development/operating-system/pci-note",
    content: (
      <div>
        <h3>PCI 구성 공간</h3>
        <p>
          PCI 구성 공간은 256 바이트 크기의 공간이며 이 곳에서 PCI 슬롯에 연결된 장치 정보를 얻을 수 있다. 
          PCI 구성 공간에 접근하기 위하여 아래와 같은 구조의 주소를 사용한다: 
        </p>

        <table className="table">
          <tr className="table">
            <td className="table">31</td>
            <td className="table">30 - 24</td>
            <td className="table">23 - 16</td>
            <td className="table">15 - 11</td>
            <td className="table">10 - 8</td>
            <td className="table">7 - 0</td>
          </tr>
          <tr className="table">
            <td className="table">Enable Bit</td>
            <td className="table">Reserved</td>
            <td className="table">Bus Number</td>
            <td className="table">Device Number</td>
            <td className="table">Function Number</td>
            <td className="table">Register Offset</td>
          </tr>
        </table>

        <p>
          위와 같은 구조의 주소를 <span className="codeline">CONFIG_ADDRESS</span>와 <span className="codeline">CONFIG_DATA</span> 레지스터에 전달하여 장치에 대한 정보를 얻는다.
          
        </p>
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={PCINote.data.title} createdate={PCINote.data.createdate} editdate={PCINote.data.editdate} content={PCINote.data.content} />
    );
  }
}

export default PCINote;
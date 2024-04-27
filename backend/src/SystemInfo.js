import si from "systeminformation";

const sysData = await si.system()
const cpuData = await si.cpu()
const memData = await si.mem()
const brandData = await si.chassis()
const osData = await si.osInfo()
const netIntData = await si.networkInterfaces()

export default {
    getSystemDetailChart: (PORT: number)=>{
        return (
            `
            ____________________________
            ----------------------------
            ||||    SERVER STARTED  ||||
            ----------------------------
            ----------------------------
            |   PORT: ${PORT}
            |   PROCESS: ${process.pid}
            |   ------------------------
            |   IPv4: ${netIntData[14].ip4}
            |   IPv6: ${netIntData[14].ip6}
            |   Name: ${netIntData[14].ifaceName}
            |   Type: ${netIntData[14].type}
            |   DHCP: ${netIntData[14].dhcp}
            |   MAC: ${netIntData[14].mac}
            |   Speed: ${netIntData[14].speed}
            |   Virtual: ${netIntData[14].virtual}
            |---------------------------
            |        SYSTEM INFO       
            |---------------------------
            |   > Manufacturer: ${sysData.manufacturer}
            |   > SKU: ${sysData.sku}
            |   > Model: ${sysData.model}
            |   > Version: ${sysData.version}
            |   -----------------------
            |   > Hardware Model: ${brandData.model}
            |   > Hardware Manufacturer: ${brandData.manufacturer}
            |   > Hardware SKU: ${brandData.sku}
            |   > Hardware Type: ${brandData.type}
            |   > Hardware Asset: ${brandData.assetTag}
            |   > Hardware Version: ${brandData.version}
            |---------------------------
            |        OS INFO       
            |---------------------------
            |   > Distro: ${osData.distro}
            |   > Codename: ${osData.codename}
            |   > Kernel: ${osData.kernel}
            |   > Hostname: ${osData.hostname}
            |   > Hypervisor: ${osData.hypervisor}
            |   > OS_Release: ${osData.release}
            |---------------------------
            |        CPU INFO       
            |---------------------------
            |   > Model: ${cpuData.model}
            |   > Manufacturer: ${cpuData.manufacturer}
            |   > Brand: ${cpuData.brand}
            |   > Vendor: ${cpuData.vendor}
            |   > Cores: ${cpuData.cores}
            |   > Eff Cores: ${cpuData.efficiencyCores}
            |   > Perf Cores: ${cpuData.performanceCores}
            |   > Speed: ${cpuData.speed}
            |   > Min Speed: ${cpuData.speedMin}
            |   > Max Speed: ${cpuData.speedMax}
            |   > Chip Family: ${cpuData.family}
            |   > Vz Enabled: ${cpuData.virtualization}
            |   > Volt: ${cpuData.voltage}
            |---------------------------
            |        MEM INFO       
            |---------------------------
            |   > Total Cap: ${memData.total}
            |   > Free Cap: ${memData.free}
            |   > Used Cap: ${memData.used}
            |   > Slab: ${memData.slab}
            |   > Swap Cap: ${memData.swaptotal}
            |   > Swap Free Cap: ${memData.swapfree}
            |   > Swap Used Cap: ${memData.swapused}
            |   > Buffers: ${memData.buffers}
            --------------------------
        `
        )
    }
}
export const GetServiceDetails = async () =>{
    return await ipcRenderer.invoke('GetServiceDetails');
};

export const StopService = async () =>{
    return await ipcRenderer.invoke('StopService');
}

export const StartService = async () =>{
    return await ipcRenderer.invoke('StartService');
}
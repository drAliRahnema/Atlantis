// import { io, ManagerOptions, SocketOptions } from 'socket.io-client'

export default defineNuxtPlugin((nuxtApp) => {
    // const config = useAppConfig();
    // const socket = io(config.SOCKET_BASE_URL,{
    //     maxHttpBufferSize: 1e8
    // });

    return {
        provide: {
            // socket: () => socket
        }
      }
});

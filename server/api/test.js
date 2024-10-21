
export default {
  setup() {
    const BASE_API_WS = "https://komgrip.co.th/coincap/assets"; 
    const topCoins = ref([]);
    let socket;

    const connectWebSocket = () => {
      socket = new WebSocket(BASE_API_WS);

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data["_rawValue"]);
        topCoins.value = data["data"];
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed. Reconnecting...");
        setTimeout(connectWebSocket, 5000);
      };
    };

    onMounted(() => {
      connectWebSocket();
    });

    onBeforeUnmount(() => {
      if (socket) socket.close();
    });

    return {
      topCoins,
    };
  },
};

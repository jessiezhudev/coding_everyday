// DailyAdviceServer服务端程序
import java.io.*;
import java.net.*;

public class DailyAdviceServer {
    String [] adviceList = {
        "Life is a journey", "what are we going to do not to regret looking back as we go forward"
    };
    public void go(){
        try {
            ServerSocket serverSocket = new ServerSocket(4242);//监听客户端对这台机器在4242端口上的要求
            while(true) {
                Socket sock = serverSocket.accept();
                PrintWriter writer = new PrintWriter(sock.getOutputStream());
                String advice = getAdvice();
                writer.printIn(advice);
                writer.close();
                System.out.printIn(advice);
            }
        }catch(IOException ex) {
            ex.printStackTrace();
        }
    }
    private String getAdvice() {
        int random = (int) (Math.random() * adviceList.length);
        return adviceList[random];
    }
    public static void main (String[] args) {
        DailyAdviceServer server = new DailyAdviceServer();
        server.go();
    }
}

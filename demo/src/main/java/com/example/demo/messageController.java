package com.example.demo;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;



@Controller
class messageController{	
  
	@MessageMapping("dest")
	@SendTo("/chatroom/user")
	public Greeting greeting(ChatMessage chatMessage)throws Exception{
		Thread.sleep(3000);
 		System.out.println(chatMessage.getMessage());
		 System.out.println(chatMessage.getSenderName());
		 System.out.println(chatMessage.getStatus());
		return new Greeting(HtmlUtils.htmlEscape(chatMessage.getStatus()) + "!");

	}
}
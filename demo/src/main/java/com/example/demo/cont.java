package com.example.demo;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;



@Controller
class cont{	
  
	@MessageMapping("dest")
	@SendTo("/chatroom/user")
	public Greeting greeting(HelloMessage helloMessage)throws Exception{
		Thread.sleep(3000);
		System.out.println(HtmlUtils.htmlEscape(helloMessage.getName())+"");
		return new Greeting(HtmlUtils.htmlEscape(helloMessage.getName()) + "!");

	}
}
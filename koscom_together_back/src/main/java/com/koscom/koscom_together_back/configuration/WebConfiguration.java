package com.koscom.koscom_together_back.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000",
                        "http://54.180.125.255:3000",
                        "http://54.180.125.255:80",
                        "http://54.180.123.152:3000")
                .allowedMethods("*");
    }
}

package appiumtest;

import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement; // Import MobileElement

public class Calculator {

    static AppiumDriver<MobileElement> driver; // Declaring 'driver' variable globally

    public static void main(String[] args) {
        try {
            openCalculator();
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public static void openCalculator() {
        DesiredCapabilities cap = new DesiredCapabilities();

        cap.setCapability("deviceName" , "My Mobile");
        cap.setCapability("udid", "07586251BR012497");
        cap.setCapability("platformName", "Android");
        cap.setCapability("platformVersion", "12");
        cap.setCapability("appPackage", "com.transsion.calculator");
        cap.setCapability("appActivity", "com.transsion.calculator.Calculator");

        URL url = new URL("http://127.0.0.1:4723/wd/hub");

        driver = new AppiumDriver<>(url , cap); // Using generic AppiumDriver

        System.out.println("App Started ....");
    }
}

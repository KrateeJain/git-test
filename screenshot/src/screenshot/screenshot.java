package screenshot;

import java.awt.AWTException;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;
import javax.imageio.ImageIO;
import java.text.SimpleDateFormat;
import java.util.Date;

class screenshot extends TimerTask {

	SimpleDateFormat timeStamp = new SimpleDateFormat("hh_mm_ss");

	public void run() {
		try {
			
			Robot robot = new Robot();
			String format = "jpg";
			String fileName = "FullScreenshot_" + timeStamp.format(new Date()) + "." + format;
			//String fileName = "C:\\Dummy\\FullScreenshot_" + timeStamp.format(new Date()) + "." + format;
			
			System.out.println(fileName);
			
			Rectangle screenRect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
			BufferedImage screenFullImage = robot.createScreenCapture(screenRect);
			ImageIO.write(screenFullImage, format, new File(fileName));
			
			System.out.println("A full screenshot saved!"); 
		    }
		
		    catch (AWTException | IOException ex)
		    { System.err.println(ex);
		    }
		
		    System.out.println("Method ENded");
	}

	public static void main(String[] args) {
		Timer timer = new Timer();
		timer.schedule(new screenshot(), 0, 15000);
	}
}

package br.com.aeho.estoubem;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.PowerManager;
import android.support.v4.content.WakefulBroadcastReceiver;
import android.util.Log;
import android.widget.Toast;

public class AlarmRec extends WakefulBroadcastReceiver {

	final public static String ONE_TIME = "onetime";

	@Override
	public void onReceive(Context context, Intent intent) {
		PowerManager pm = (PowerManager) context
				.getSystemService(Context.POWER_SERVICE);
		PowerManager.WakeLock wl = pm.newWakeLock(
				PowerManager.SCREEN_BRIGHT_WAKE_LOCK |
				PowerManager.FULL_WAKE_LOCK |
				PowerManager.ACQUIRE_CAUSES_WAKEUP,
				"");		
		
		wl.acquire();

		// execute a particular action
//		Toast.makeText(context, "Alarm Fired!", Toast.LENGTH_LONG).show();
		Log.v("AlarmRec", "BOOOOOM!");

		Intent i = new Intent(context, AlarmActivity.class);
		i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		context.startActivity(i);

		// release the wakeLock that we had gained before
		wl.release();
	}

	public void setAlarm(Context context) {
		AlarmManager am = (AlarmManager) context
				.getSystemService(Context.ALARM_SERVICE);
		Intent i = new Intent(context, AlarmRec.class);
		PendingIntent pi = PendingIntent.getBroadcast(context, 0, i, 0);

		am.setRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(),
				1000 * 5, pi);
	}
	
	public void setOnetimeTimer(Context context) {
		AlarmManager am = (AlarmManager) context
				.getSystemService(Context.ALARM_SERVICE);
		Intent intent = new Intent(context, AlarmRec.class);
		intent.putExtra(ONE_TIME, Boolean.TRUE);
		PendingIntent pi = PendingIntent.getBroadcast(context, 0, intent, 0);
		am.set(AlarmManager.RTC_WAKEUP, System.currentTimeMillis() + 3000, pi);
	}

	public void cancelAlarm(Context context) {
		Intent intent = new Intent(context, AlarmRec.class);
		PendingIntent sender = PendingIntent
				.getBroadcast(context, 0, intent, 0);
		AlarmManager alarmManager = (AlarmManager) context
				.getSystemService(Context.ALARM_SERVICE);

		alarmManager.cancel(sender);
	}

}
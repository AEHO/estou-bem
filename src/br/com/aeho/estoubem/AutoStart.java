package br.com.aeho.estoubem;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class AutoStart extends BroadcastReceiver {
	AlarmRec alarm = new AlarmRec();

	@Override
	public void onReceive(Context context, Intent intent) {
		if (intent.getAction().equals("android.intent.action.BOOT_COMPLETED")) {
			alarm.setAlarm(context);
		}
	}
}

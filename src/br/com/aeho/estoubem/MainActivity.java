package br.com.aeho.estoubem;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

/**
 * THIS IS CODE FOR A HACKATHON. THIS IS NOT INTENDED TO BE PERFECT :P
 * 
 * @author Ciro Costa
 * 
 */

public class MainActivity extends Activity {

	private AlarmRec alarm;
	public static final String PREFS_NAME = "MyPrefsFile";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		WebView myWebView = new WebView(this);
		setContentView(myWebView);

		myWebView.loadUrl("file:///android_asset/index.html");

		WebSettings webSettings = myWebView.getSettings();
		webSettings.setJavaScriptEnabled(true);

		myWebView.addJavascriptInterface(new WebAppInterface(this), "Android");

		alarm = new AlarmRec();

		// cancelRepeatingTimer();
		// startRepeatingTimer();
	}

	public void startRepeatingTimer() {
		Context context = this.getApplicationContext();
		if (alarm != null) {
			alarm.setAlarm(context);
		} else {
			Toast.makeText(context, "Alarm is null", Toast.LENGTH_SHORT).show();
		}
	}

	public void cancelRepeatingTimer() {
		Context context = this.getApplicationContext();
		if (alarm != null) {
			alarm.cancelAlarm(context);
		} else {
			Toast.makeText(context, "Alarm is null", Toast.LENGTH_SHORT).show();
		}
	}

	public void onetimeTimer() {
		Context context = this.getApplicationContext();
		if (alarm != null) {
			alarm.setOnetimeTimer(context);
		} else {
			Toast.makeText(context, "Alarm is null", Toast.LENGTH_SHORT).show();
		}
	}

	public SharedPreferences getSharedPreferences() {
		SharedPreferences prefs = getSharedPreferences(PREFS_NAME, 0);

		return prefs;
	}

	public SharedPreferences.Editor getEditablePreferences() {
		return getSharedPreferences().edit();
	}

	// Javascript Interface

	public class WebAppInterface {
		Context mContext;

		/** Instantiate the interface and set the context */
		WebAppInterface(Context c) {
			mContext = c;
		}

		/** Show a toast from the web page */
		@JavascriptInterface
		public void showToast(String toast) {
			Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
		}

		@JavascriptInterface
		public void addToKey(String key, String value) {
			SharedPreferences.Editor editor = getEditablePreferences();
			editor.putString(key, value);
			editor.apply();
		}

		@JavascriptInterface
		public void removeFromKey(String key) {
			SharedPreferences.Editor editor = getEditablePreferences();
			editor.remove(key);
			editor.commit();
		}

		@JavascriptInterface
		public String getFromKey(String key) {
			return getSharedPreferences().getString(key, "null");
		}
	}
}

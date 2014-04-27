package br.com.aeho.estoubem;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

@SuppressLint("JavascriptInterface")
public class AlarmActivity extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		WebView myWebView = new WebView(this);
		setContentView(myWebView);

		myWebView.loadUrl("file:///android_asset/alarm.html");
		
		WebSettings webSettings = myWebView.getSettings();
		webSettings.setJavaScriptEnabled(true);		

		myWebView.addJavascriptInterface(new WebAppInterface(this), "AndroidAlarme");
	}
	
	public class WebAppInterface {
		Context mContext;

		/** Instantiate the interface and set the context */
		WebAppInterface(Context c) {
			mContext = c;
		}

		public void finishActivity() {
			finish();
		}
 	}
}

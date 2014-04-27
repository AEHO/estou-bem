package br.com.aeho.estoubem;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class AlarmActivity extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		WebView myWebView = new WebView(this);
		setContentView(myWebView);

		myWebView.loadUrl("file:///android_asset/alarm.html");
		
		WebSettings webSettings = myWebView.getSettings();
		webSettings.setJavaScriptEnabled(true);		
	}
}

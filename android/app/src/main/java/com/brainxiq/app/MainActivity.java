package com.brainxiq.app;

import android.os.Bundle;
import androidx.activity.EdgeToEdge;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // Android 15+ draws apps edge to edge; Capacitor's SystemBars plugin ("css" insets
        // handling in capacitor.config.json) passes the safe-area sizes to the web layout.
        EdgeToEdge.enable(this);
        super.onCreate(savedInstanceState);
    }
}

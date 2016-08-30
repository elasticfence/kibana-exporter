# Kibana Exporter (Spy Plugin)

Simple Kibana 4.5 plugin extending SPY with response exporting functionality _(JSON, CSV, XML)_

<img src="http://i.imgur.com/aiyhzpG.png" />

### Plugin Installation
```
/opt/kibana/bin/kibana plugin --install kibana-exporter -u  https://github.com/elasticfence/kibana-exporter/releases/download/4.5/kexp-latest.tar.gz
```

#### Dev Plugin Installation
```
git clone https://github.com/elasticfence/kibana-exporter
cd kibana-exporter && npm install && npm run package
/opt/kibana/bin/kibana plugin --install kibana-exporter -u file://`pwd`/kexp-latest.tar.gz
```

#### Plugin Removal
```
/opt/kibana/bin/kibana plugin -r kibana-exporter
```



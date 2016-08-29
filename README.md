# Kibana Exporter (Spy Plugin)

Simple Kibana 4.5 plugin extending SPY with response exporting functionality _(JSON, CSV)_

<img src="http://i.imgur.com/TUhjSRM.png" />

### Installation

#### Dev Plugin Install
```
git clone https://github.com/elasticfence/kibana-exporter
cd kibana-exporter && npm install && npm run package
/opt/kibana/bin/kibana plugin --install kibana-exporter -u file://`pwd`/kexp-latest.tar.gz
```
#### Dev Plugin Remove
```
/opt/kibana/bin/kibana plugin -r kibana-exporter
```



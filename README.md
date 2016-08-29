# Kibana Exporter (Spy Plugin)

Simple Kibana plugin extending SPY with response exporting functionality _(JSON, CSV)_


### Installation

#### Dev Plugin Install
```
git clone https://github.com/elasticfence/kibana-exporter
cd kaae && npm install && npm run package
/opt/kibana/bin/kibana plugin --install kibana-exporter -u file://`pwd`/kexp-latest.tar.gz
```
#### Dev Plugin Remove
```
/opt/kibana/bin/kibana plugin -r kibana-exporter
```



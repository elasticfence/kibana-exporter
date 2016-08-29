import _ from 'lodash';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],

    uiExports: {
      spyModes: ['plugins/kibana-exporter/button/export_button']
      // chromeNavControls: ['plugins/kibana-exporter/button/export_button'],
    },
    config: function (Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    }

    //, init: require('./init.js'),

  });
};

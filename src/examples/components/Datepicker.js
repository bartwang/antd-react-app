import React, { Component } from "react";
import { DatePicker } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

export default class Datepicker extends Component {
  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">DatePicker 日期选择框</h4>
            <p>
              DatePicker extends{" "}
              <a
                className="link link__highlight"
                href="https://ant.design/components/date-picker-cn/"
                target="_blank"
              >
                Antd DatePicker
              </a>
            </p>
            <hr />
          </div>

          <div className="col-xs-12" id="datepicker">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>DatePicker</i>
              </h5>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p>Default Calendar Size</p>
                  <DatePicker />
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`import { DatePicker } from '@simpleryo/syw-uikit';
<!-- Default Size Below -->
<DatePicker />
`}
            </Snippet>
          </div>

          <div className="col-xs-12" id="rangepicker">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>RangePicker & MonthPicker</i>
              </h5>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p>RangePicker</p>
                  <DatePicker.RangePicker />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <p>MonthPicker</p>
                  <DatePicker.MonthPicker placeholder="请选择月份" />
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`import { DatePicker } from '@simpleryo/syw-uikit';
<DatePicker.RangePicker />

<DatePicker.MonthPicker placeholder="请选择月份" />`}
            </Snippet>
          </div>
        </div>
      </Layout>
    );
  }
}

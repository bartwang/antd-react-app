import React from "react";
import { Steps } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";
import { map } from "ramda";

const dummySteps = [
  { id: 0, title: "填写账号", description: "这里是描述" },
  { id: 1, title: "重置密码", description: "这里是描述" },
  { id: 2, title: "完成", description: "这里是描述" }
];

const StepProgress = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Step progress 步骤条</h4>
        <p>引导用户按照流程完成任务的导航条。</p>
        <h5>何时使用</h5>
        <p className="full-width margin-bottom-20">
          当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。{" "}
          <a
            className="link link__highlight"
            href="https://ant.design/components/steps-cn/"
            target="_blank"
          >
            Ant Steps
          </a>
        </p>
        <hr />
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Horizontal Style</i>
          </h5>
        </div>

        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <h6>Default Size:</h6>
              <Steps current={0}>
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Small Size:</h6>
              <Steps current={1} size="small">
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Normal Size with Description:</h6>
              <Steps current={2}>
                {map(
                  step => (
                    <Steps.Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                    />
                  ),
                  dummySteps
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Small Size with Description:</h6>
              <Steps current={1} status="error" size="small">
                {map(
                  step => (
                    <Steps.Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                    />
                  ),
                  dummySteps
                )}
              </Steps>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Steps } from '@simpleryo/syw-uikit';
<Steps current={0} size="small">
  <Steps.Step title="填写账号" />
  <Steps.Step title="重置密码" />
  <Steps.Step title="完成" />
</Steps>
`}
        </Snippet>
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Dot style</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <Steps current={1} progressDot>
                <Steps.Step title="Finished" description="Congratulations" />
                <Steps.Step title="In Progress" />
                <Steps.Step title="Waiting" description="Almost there!" />
                <Steps.Step title="Waiting" />
              </Steps>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Steps } from '@simpleryo/syw-uikit';
<Steps current={1} progressDot>
  <Steps.Step
    title="Finished"
    description="You can hover on the dot."
  />
  <Steps.Step
    title="In Progress"
    description="You can hover on the dot."
  />
  <Steps.Step
    title="Waiting"
    description="You can hover on the dot."
  />
  <Steps.Step
    title="Waiting"
    description="You can hover on the dot."
  />
</Steps>`}
        </Snippet>
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Vertical style</i>
          </h5>
        </div>

        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <Steps direction="vertical" current={0}>
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Small Size: </h6>
              <Steps direction="vertical" current={1} size="small">
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <Steps direction="vertical" current={2}>
                {map(
                  step => (
                    <Steps.Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                    />
                  ),
                  dummySteps
                )}
              </Steps>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Steps } from '@simpleryo/syw-uikit';
<Steps direction="vertical" current={0}>
  <Steps.Step title="填写账号" />
  <Steps.Step title="重置密码" />
  <Steps.Step title="完成" />
</Steps>
`}
        </Snippet>
      </div>
    </div>
  </Layout>
);

export default StepProgress;

import React from "react";
import { Badge } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const IconCards = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h3>Icon cards</h3>
        <hr />
      </div>

      <div className="margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>icon card</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-4">
              <div className="icon-card">
                <Badge
                  size={80}
                  icon="icon-suitcase"
                  customClass="white bg--dark-grey"
                />
                <h6>我是标题h6</h6>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="icon-card">
                <Badge
                  size={80}
                  icon="icon-id-card"
                  customClass="white bg--dark-grey"
                />
                <h6>我是标题h6</h6>
                <p>这是描述的段落p</p>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="icon-card">
                <Badge
                  size={80}
                  icon="icon-archive"
                  customClass="white bg--dark-grey"
                />
                <h6>我是标题h6</h6>
                <p>这也是描述的段落p</p>
              </div>
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { Badge } from "@simpleryo/syw-uikit";
<div className="icon-card">
  <Badge size={80} icon="icon-suitcase" customClass="white bg--dark-grey" />
  <h6>我是标题h6</h6>
  <p>这是描述的段落p</p>
</div>`}
        </Snippet>
      </div>

      <div className="margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Responsive icon card (vertical on mobile)</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="vertical-icon-card">
                <Badge
                  size={80}
                  icon="icon-user"
                  customClass="white bg--dark-grey"
                />
                <div className="vertical-icon-card__wrapper">
                  <div className="vertical-icon-card__detail">
                    <h6>我是标题h6</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="vertical-icon-card">
                <Badge
                  size={80}
                  icon="icon-write"
                  customClass="white bg--dark-grey"
                />
                <div className="vertical-icon-card__wrapper">
                  <div className="vertical-icon-card__detail">
                    <h6>我是标题h6</h6>
                    <p>这是描述的段落p</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="vertical-icon-card">
                <Badge
                  size={80}
                  icon="icon-health"
                  customClass="white bg--dark-grey"
                />
                <div className="vertical-icon-card__wrapper">
                  <div className="vertical-icon-card__detail">
                    <h6>我是标题h6</h6>
                    <p>这也是用作描述的段落p</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { Badge } from "@simpleryo/syw-uikit";
<div className="vertical-icon-card">
  <Badge size={80} icon="icon-user" customClass="white bg--dark-grey" />
  <div className="vertical-icon-card__wrapper">
    <div className="vertical-icon-card__detail">
      <h6>我是标题h6</h6>
      <p>这是描述的段落p</p>
    </div>
  </div>
</div>`}
        </Snippet>
      </div>

      <div className="margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Icon card with status</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-3">
              <div className="icon-card">
                <Badge
                  type="number"
                  size={36}
                  customClass="white bg--dark-grey"
                >
                  <span>1</span>
                </Badge>
                <h6>标题h6</h6>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="icon-card">
                <Badge
                  type="status"
                  status="active"
                  customClass="white bg--dark-grey"
                >
                  <span>2</span>
                </Badge>
                <h6>一样标题h6</h6>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="icon-card">
                <Badge
                  type="status"
                  status="completed"
                  customClass="white bg--dark-grey"
                >
                  <span>3</span>
                </Badge>
                <h6>还是标题h6</h6>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="icon-card">
                <Badge
                  type="status"
                  status="error"
                  customClass="white bg--dark-grey"
                >
                  <span>4</span>
                </Badge>
                <h6>同样标题h6</h6>
              </div>
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { Badge } from "@simpleryo/syw-uikit";
<div className="icon-card">
  <Badge type="number" size={36} customClass="white bg--dark-grey"><span>1</span></Badge>
  <h6>标题h6</h6>
</div>
<div className="icon-card">
  <Badge type="status" status="active" customClass="white bg--dark-grey">
    <span>2</span>
  </Badge>
  <h6>一样标题h6</h6>
</div>
<div className="icon-card">
  <Badge type="status" status="completed" customClass="white bg--dark-grey"><span>3</span></Badge>
  <h6>还是标题h6</h6>
</div>
<div className="icon-card">
  <Badge type="status" status="error" customClass="white bg--dark-grey"><span>4</span></Badge>
  <h6>同样标题h6</h6>
</div>`}
        </Snippet>
      </div>
    </div>
  </Layout>
);

export default IconCards;

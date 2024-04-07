<template>
  <div class="desktop">
    <div class="overlap">
      <div class="overlap-group">
        <div class="backgrund">
          <div class="overlap-group-2">
            <img class="vector" alt="Vector" src="@/assets/Vector 5.png" />
            <img class="img" alt="Vector" src="@/assets/Vector 4.png" />
            <img class="vector-2" alt="Vector" src="@/assets/Vector 3.png" />
            <img class="vector-3" alt="Vector" src="@/assets/Vector 2.png" />
            <img class="vector-4" alt="Vector" src="@/assets/Vector 1.png" />
          </div>
        </div>
        <header class="header">
          <div class="overlap-2">
            <DivWrapper
              LOGOSred="@/assets/LOGO.png"
              class="frame-52"
              frameWrapperDivClassName="frame-6"
              frameWrapperFrameClassName="frame-52-instance"
              frameWrapperFrameClassNameOverride="frame-5"
              frameWrapperFrameDivClassName="design-component-instance-node"
              frameWrapperFramePropertyDefaultClassName="frame-7"
              frameWrapperFrameText="Sign up"
            />
            <div class="group">
              <div class="heading-name">
                <div class="overlap-group-wrapper">
                  <div class="overlap-group-3">
                    <div class="header-menu-default">
                      <div class="label">Home</div>
                    </div>
                    <div class="group-2">
                      <div class="rectangle" />
                      <div class="rectangle-2" />
                    </div>
                  </div>
                </div>
                <div class="menu-item-default">
                  <div class="label-2">Service</div>
                </div>
                <div class="menu-item-default">
                  <div class="label-2">Feature</div>
                </div>
                <div class="menu-item-default">
                  <div class="label-2">Product</div>
                </div>
                <div class="menu-item-default">
                  <div class="label-2">Testimonial</div>
                </div>
                <div class="menu-item-default">
                  <div class="label-2">FAQ</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <img class="illustration" alt="Illustration" src="@/assets/Illustration.png" />
      </div>
      <div class="typography">
        <div class="mockup">
          <div class="group-wrapper">
            <div class="group-3">
              <div class="sawit-rover-drone">
                Sawit Rover <br />
                &amp; Drone
              </div>
              <p class="welcome-to-our">
                Welcome to our innovative platform: &#34;SRED&#34;. We present you with a cutting-edge solution for
                efficient and secure monitoring and data recording from drones and rovers, utilizing blockchain
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="text-wrapper-2">Get Product</div>
        <img class="vector-5" alt="Vector" src="@/assets/Vector 7.png" />
      </div>
      <div class="frame-8">
        <div class="frame-9">
          <img class="ellipse" alt="Ellipse" src="@/assets/Ellipse 1.png" />
          <img class="ellipse-2" alt="Ellipse" src="@/assets/Ellipse 2.png" />
          <img class="ellipse-3" alt="Ellipse" src="@/assets/Ellipse 3.png" />
        </div>
        <div class="frame-10">
          <div class="text-wrapper-3">1100+</div>
          <p class="p">Active users around the world</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps } from "vue";
import { DivWrapper } from "@/components/DivWrapper";

export default {
  name: "DesktopView",
  components: {
    DivWrapper,
  },
  props: defineProps({}),
};
</script>

<style>
.desktop {
  background-color: #ffffff;
  height: 800px;
  mix-blend-mode: darken;
  overflow: hidden;
  width: 1440px;
}

.desktop .overlap {
  height: 792px;
  left: -48px;
  position: relative;
  top: -141px;
  width: 1554px;
}

.desktop .overlap-group {
  height: 764px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1554px;
}

.desktop .backgrund {
  height: 560px;
  left: 921px;
  position: absolute;
  top: 0;
  width: 633px;
}

.desktop .overlap-group-2 {
  height: 800px;
  left: -873px;
  position: relative;
  top: 141px;
  width: 1440px;
}

.desktop .vector {
  height: 800px;
  left: 473px;
  position: absolute;
  top: 0;
  width: 967px;
}

.desktop .img {
  height: 800px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.desktop .vector-2 {
  height: 620px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1328px;
}

.desktop .vector-3 {
  height: 647px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1067px;
}

.desktop .vector-4 {
  height: 800px;
  left: 0;
  position: absolute;
  top: 0;
  width: 927px;
}

.desktop .header {
  background-color: transparent;
  height: 61px;
  left: 0;
  position: absolute;
  top: 141px;
  width: 1328px;
}

.desktop .overlap-2 {
  height: 61px;
  position: relative;
  width: 1328px;
}

.desktop .frame-52 {
  display: flex !important;
  height: 61px !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  width: 1328px !important;
}

.desktop .frame-52-instance {
  margin-left: -25px !important;
  margin-right: -25px !important;
  padding: 0px 0px 0px 350px !important;
}

.desktop .design-component-instance-node {
  color: var(--shade-4) !important;
  font-size: 14px !important;
  margin-bottom: -4.5px !important;
  margin-left: -12.5px !important;
  margin-right: -12.5px !important;
  margin-top: -6.5px !important;
}

.desktop .frame-5 {
  margin-bottom: -10px !important;
  margin-top: -10px !important;
  padding: 10px 0px 10px 80px !important;
}

.desktop .frame-6 {
  margin-bottom: -4px !important;
  padding: 10px 80px 10px 700px !important;
}

.desktop .frame-7 {
  background-color: var(--shade-4) !important;
  border-radius: 5px !important;
  display: flex !important;
  height: 30px !important;
  width: 68px !important;
}

.desktop .group {
  height: 24px;
  left: 370px;
  position: absolute;
  top: 20px;
  width: 588px;
}

.desktop .heading-name {
  align-items: center;
  display: flex;
  gap: 50px;
  justify-content: center;
  position: relative;
  width: 588px;
}

.desktop .overlap-group-wrapper {
  height: 24px;
  position: relative;
  width: 46px;
}

.desktop .overlap-group-3 {
  height: 25px;
  position: relative;
}

.desktop .header-menu-default {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  left: 0;
  position: absolute;
  top: 0;
}

.desktop .label {
  color: var(--text-gray-900);
  font-family: var(--body-medium-body-2-font-family);
  font-size: var(--body-medium-body-2-font-size);
  font-style: var(--body-medium-body-2-font-style);
  font-weight: var(--body-medium-body-2-font-weight);
  letter-spacing: var(--body-medium-body-2-letter-spacing);
  line-height: var(--body-medium-body-2-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.desktop .group-2 {
  height: 2px;
  left: 2px;
  position: absolute;
  top: 23px;
  width: 30px;
}

.desktop .rectangle {
  background-color: var(--shade-2);
  height: 2px;
  left: 26px;
  position: absolute;
  top: 0;
  width: 4px;
}

.desktop .rectangle-2 {
  background-color: var(--shade-4);
  height: 2px;
  left: 0;
  position: absolute;
  top: 0;
  width: 25px;
}

.desktop .menu-item-default {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.desktop .label-2 {
  color: var(--text-gray-900);
  font-family: var(--body-regular-body-2-font-family);
  font-size: var(--body-regular-body-2-font-size);
  font-style: var(--body-regular-body-2-font-style);
  font-weight: var(--body-regular-body-2-font-weight);
  letter-spacing: var(--body-regular-body-2-letter-spacing);
  line-height: var(--body-regular-body-2-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.desktop .illustration {
  height: 483px;
  left: 863px;
  position: absolute;
  top: 281px;
  width: 432px;
}

.desktop .typography {
  height: 286px;
  left: 131px;
  position: absolute;
  top: 278px;
  width: 640px;
}

.desktop .mockup {
  height: 286px;
}

.desktop .group-wrapper {
  height: 286px;
  width: 640px;
}

.desktop .group-3 {
  height: 286px;
  position: relative;
  width: 644px;
}

.desktop .sawit-rover-drone {
  color: var(--shade-4);
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 50px;
  font-weight: 600;
  left: 0;
  letter-spacing: 1px;
  line-height: 70px;
  position: absolute;
  top: 0;
}

.desktop .welcome-to-our {
  color: var(--neutral-black);
  font-family: var(--main-text-font-family);
  font-size: var(--main-text-font-size);
  font-style: var(--main-text-font-style);
  font-weight: var(--main-text-font-weight);
  left: 4px;
  letter-spacing: var(--main-text-letter-spacing);
  line-height: var(--main-text-line-height);
  position: absolute;
  top: 176px;
  width: 636px;
}

.desktop .product {
  align-items: center;
  background-color: var(--shade-4);
  border-radius: 64px;
  display: inline-flex;
  gap: 16px;
  left: 128px;
  padding: 16px 32px;
  position: absolute;
  top: 657px;
}

.desktop .text-wrapper-2 {
  color: #ffffff;
  font-family: "M PLUS 1-Medium", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.desktop .vector-5 {
  height: 18.5px;
  margin-right: -1px;
  position: relative;
  width: 24.5px;
}

.desktop .frame-8 {
  align-items: center;
  display: inline-flex;
  gap: 16px;
  left: 140px;
  position: absolute;
  top: 736px;
}

.desktop .frame-9 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
}

.desktop .ellipse {
  height: 50px;
  margin-bottom: -1px;
  margin-left: -1px;
  margin-top: -1px;
  object-fit: cover;
  position: relative;
  width: 50px;
}

.desktop .ellipse-2 {
  height: 50px;
  margin-bottom: -1px;
  margin-left: -12px;
  margin-top: -1px;
  object-fit: cover;
  position: relative;
  width: 50px;
}

.desktop .ellipse-3 {
  height: 50px;
  margin-bottom: -1px;
  margin-left: -12px;
  margin-right: -1px;
  margin-top: -1px;
  object-fit: cover;
  position: relative;
  width: 50px;
}

.desktop .frame-10 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
}

.desktop .text-wrapper-3 {
  color: var(--shade-4);
  font-family: "M PLUS 1-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.desktop .p {
  color: var(--neutral-black);
  font-family: "M PLUS 1-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16px;
  position: relative;
  width: 177px;
}
</style>
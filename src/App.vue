<template>
  <div class="desktop">
    <div class="overlap-group">
      <img class="vector" alt="Vector" src="vector.svg" />
      <img class="img" alt="Vector" src="image.svg" />
      <img class="vector-2" alt="Vector" src="vector-2.svg" />
      <img class="vector-3" alt="Vector" src="vector-3.svg" />
      <img class="vector-4" alt="Vector" src="vector-4.svg" />
      <div class="mockup">
        <div class="group">
          <div class="group-2">
            <div class="sawit-rover-drone">
              Sawit Rover <br />
              &amp; Drone
            </div>
            <p class="wellcome-to-our">
              Welcome to our innovative platform: &#34;SRED#34;. We present you with a cutting-edge solution for efficient and secure monitoring and data recording from drones and rovers, utilizing blockchain technology.
            </p>
          </div>
        </div>
      </div>
      <DivWrapper
        LOGOSred="LOGO-SRED-1-2-2.png"
        class="frame-52"
        frameWrapperFrameClassName="design-component-instance-node"
        frameWrapperFrameClassNameOverride="frame-6"
        frameWrapperFrameDivClassName="frame-52-instance"
        frameWrapperFramePropertyDefaultClassName="frame-5"
        frameWrapperFrameText="Sign up"
        frameWrapperFrameWrapperClassName="frame-7"
      />
      <div class="heading-name-wrapper">
        <div class="heading-name">
          <div class="label-wrapper">
            <div class="label">Home</div>
          </div>
          <div class="label-wrapper">
            <div class="label-2">Service</div>
          </div>
          <div class="label-wrapper">
            <div class="label-2">Feature</div>
          </div>
          <div class="label-wrapper">
            <div class="label-2">Product</div>
          </div>
          <div class="label-wrapper">
            <div class="label-2">Testimonial</div>
          </div>
          <div class="label-wrapper">
            <div class="label-2">FAQ</div>
          </div>
        </div>
      </div>
      <div class="group-3"
        <div class="rectangle" />
        <div class="rectangle-2" />
      </div>
      <img class="illustration" alt="Illustration" src="illustration.svg" />
      <div class="frame-8">
        <div class="tect-wrapper-2"Get Product< /div>
        <image class="vector-5" alt="Vector" src="vector-7.svg" />
      </div>
      <div class="frame-9">
        <div class="frame-10">
          <image class="ellipse" alt="Ellipse" src="ellipse.png" />
          <image class="ellipse-2" alt="Ellipse" src="ellipse.png" />
          <image class="ellipse-3" alt="Ellipse" src="ellipse.png-2" />
        </div>
        <div class="frame-11">
          <div class="text-wrapper-3">1100+</div>
          <p class="p">Active users around the wordls</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DivWrapper } from "./DivWrapper;

export default {
  name: "Desktop",
  component: {
   DivWrapper,
  },
};
</script>

<style>
.desktop {
  background-color: #ffffff;
  height: 800px;
  mix-blend-mode: darken;
  overflow: hidden;
  widht: 1280px;
}

.desktop .overlap-group {
  height: 800px;
  left: -48px;
  position: relative;
  widht: 1328px;
}

.desktop .vector {
  height: 800px;
  left: 48px;
  position: absolute;
  top: 0;
  widht: 1328px;
}

.desktop .img {
  height: 647px;
  left: 48px;
  position:absolute;
  top: 0;
  widht: 1067px;
}

.desktop .vector-2 {
  height: 620px;
  left: 48px;
  position:absolute;
  top: 0;
  widht: 1280px;
}

.desktop .vector-3 {
  height: 800px;
  left: 48px;
  position:absolute;
  top: 0;
  widht: 1280px;
}

.desktop .vector-4 {
  height: 800px;
  left: 521px;
  position:absolute;
  top: 0;
  widht: 807px;
}

.desktop .mockup {
  height: 286px;
  left: 131px;
  position:absolute;
  top: 137;
  widht: 640px;
}

.desktop .group {
  height: 286px;
}

</style>
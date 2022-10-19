import React from "react";
import Images from "../../../Images/Image";

const HowItWork = () => {
    return (
        <>
            <section class="bg-white aon-how-service-area sf-curve-pos">
                <div class="container">
                    <div class="section-content">
                        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <span class="aon-sub-title">Steps</span>
                                <h2 class="sf-title">How Skiller Services Works</h2>
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <div class="aon-step-blocks">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4 m-b30">
                                            <div class="aon-step-section step-position-1 aon-icon-effect">
                                                <div class="aon-step-icon aon-icon-box">
                                                    <span>
                                                        <i class="aon-icon"><img src={Images.text} alt="" /></i>
                                                    </span>
                                                </div>
                                                <div class="aon-step-info">
                                                    <h4 class="aon-title">Describe Your Task</h4>
                                                    <p>This helps us determine which Taskers are abest job.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 m-b30">
                                            <div class="aon-step-section step-position-2 aon-icon-effect">
                                                <div class="aon-step-icon">
                                                    <span>
                                                        <i class="aon-icon"><img src={Images.admin} alt="" /></i>
                                                    </span>
                                                </div>
                                                <div class="aon-step-info">
                                                    <h4 class="aon-title">Choose a Tasker</h4>
                                                    <p>This helps us determine which Taskers are abest job.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 m-b30">
                                            <div class="aon-step-section  step-position-3  aon-icon-effect">
                                                <div class="aon-step-icon">
                                                    <span>
                                                        <i class="aon-icon"><img src={Images.brainBulb} alt="" /></i>
                                                    </span>
                                                </div>
                                                <div class="aon-step-info">
                                                    <h4 class="aon-title">Live Smarter</h4>
                                                    <p>This helps us determine which Taskers are abest job.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWork;
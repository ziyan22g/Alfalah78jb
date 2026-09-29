import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Step1BasicInfo } from './Steps/Step1BasicInfo/Step1BasicInfo';
import { Step2CategorySelect } from './Steps/Step2CategorySelect/Step2CategorySelect';
import './HelpForm.css';
import { BASE_URL } from '../../Config/Config';
import { Step3Details } from './Steps/Step3Details/Step3Details';
import { useNavigate } from 'react-router-dom';

const HelpForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        // Step 1
        fullName: '',
        fatherName: '',
        cnic: '',
        phone: '',
        houseNo: '',
        // Step 2
        category: '',
        // Step 3
        details: {},
    });

    const navigation = useNavigate();

    // Step 1 Next
    const handleStep1Next = (step1Data) => {
        setFormData((prev) => ({ ...prev, ...step1Data }));
        setCurrentStep(2);
    };

    // Step 2 Next
    const handleStep2Next = (selectedCategory) => {
        setFormData((prev) => ({ ...prev, category: selectedCategory }));
        setCurrentStep(3);
    };

    // Back Button
    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    // it's function is used for submitting data for backend 
    const handleFinalSubmit = async (step3Data) => {
        const payload = {
            ...formData,
            details: step3Data,
        };

        setIsSubmitting(true);
        try {
            // await axios.post(`${BASE_URL}/api/applications/apply`, payload);
            console.log("My Application Submit:", payload);
            toast.success('Aap ki darkhwast kamiyabi se jama ho chuki hai!');

            // Form ko shuru se reset karna
            setFormData({
                fullName: '',
                fatherName: '',
                cnic: '',
                phone: '',
                houseNo: '',
                category: '',
                details: {},
            });
            setCurrentStep(1);
            navigation('/')
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Darkhwast jama karne mein masla aya hai, dobara koshish karein.';
            toast.error(errorMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="help-form-wrapper">
            <div className="help-form-container">
                {/* Step Indicator */}
                <div className="steps-indicator">
                    <div className={`step-dot ${currentStep >= 1 ? 'active' : ''}`}>1</div>
                    <div className={`step-line ${currentStep >= 2 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 2 ? 'active' : ''}`}>2</div>
                    <div className={`step-line ${currentStep >= 3 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 3 ? 'active' : ''}`}>3</div>
                </div>

                {/* Step 1 */}
                {currentStep === 1 && (
                    <Step1BasicInfo formData={formData} onNext={handleStep1Next} />
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                    <Step2CategorySelect
                        defaultCategory={formData.category}
                        onNext={handleStep2Next}
                        onBack={handleBack}
                    />
                )}

                {/* Step 3 (Dynamic Form Placeholder) */}
                {currentStep === 3 && (
                    <Step3Details
                        category={formData.category}
                        onBack={handleBack}
                        onSubmitFinal={handleFinalSubmit}
                        isSubmitting={isSubmitting}
                    />
                )}
            </div>
        </div>
    );
};

export { HelpForm };
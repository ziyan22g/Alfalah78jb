import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step1Schema } from '../../../../Schemas/HelpFormSchema/step1Schema';
import './Step1BasicInfo.css';

const Step1BasicInfo = ({ formData, onNext }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            fullName: formData.fullName || '',
            fatherName: formData.fatherName || '',
            cnic: formData.cnic || '',
            phone: formData.phone || '',
            houseNo: formData.houseNo || '',
        },
    });

    // CNIC input auto dash formatter (12345-1234567-1)
    const handleCnicChange = (e) => {
        const raw = e.target.value.replace(/\D/g, '').slice(0, 13);
        let formatted = raw;
        if (raw.length > 5 && raw.length <= 12) {
            formatted = `${raw.slice(0, 5)}-${raw.slice(5)}`;
        } else if (raw.length > 12) {
            formatted = `${raw.slice(0, 5)}-${raw.slice(5, 12)}-${raw.slice(12)}`;
        }
        setValue('cnic', formatted, { shouldValidate: true });
    };

    const onSubmit = (data) => {
        onNext(data);
    };

    return (
        <div className="step-card">
            <div className="step-header">
                <span className="step-badge">Marhala 1 az 3</span>
                <h2>Bunyadi Maloomat</h2>
                <p>Baraye meherbani apni shanakhti aur rabtay ki sahi maloomat faraham karein.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="step-form">
                <div className="input-grid">
                    {/* Pura Naam */}
                    <div className="form-group">
                        <label htmlFor="fullName">Pura Naam (Full Name) *</label>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Maslan: Muhammad Ali"
                            {...register('fullName')}
                            className={errors.fullName ? 'input-error' : ''}
                        />
                        {errors.fullName && <span className="error-text">{errors.fullName.message}</span>}
                    </div>

                    {/* Walid / Shohar Ka Naam */}
                    <div className="form-group">
                        <label htmlFor="fatherName">Walid / Shohar Ka Naam *</label>
                        <input
                            id="fatherName"
                            type="text"
                            placeholder="Maslan: Ahmad Hassan"
                            {...register('fatherName')}
                            className={errors.fatherName ? 'input-error' : ''}
                        />
                        {errors.fatherName && <span className="error-text">{errors.fatherName.message}</span>}
                    </div>

                    {/* CNIC Number */}
                    <div className="form-group">
                        <label htmlFor="cnic">CNIC / Shanakhti Card Number *</label>
                        <input
                            id="cnic"
                            type="text"
                            placeholder="33100-1234567-1"
                            {...register('cnic')}
                            onChange={handleCnicChange}
                            className={errors.cnic ? 'input-error' : ''}
                        />
                        {errors.cnic && <span className="error-text">{errors.cnic.message}</span>}
                    </div>

                    {/* Phone Number */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone / WhatsApp Number *</label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="03001234567"
                            {...register('phone')}
                            className={errors.phone ? 'input-error' : ''}
                        />
                        {errors.phone && <span className="error-text">{errors.phone.message}</span>}
                    </div>
                </div>

                {/* Ghar No / Address */}
                <div className="form-group">
                    <label htmlFor="houseNo">Ghar No / Gali / Adda (Chak 78 JB) *</label>
                    <input
                        id="houseNo"
                        type="text"
                        placeholder="Maslan: Makaan No. 1 ya jo b  "
                        {...register('houseNo')}
                        className={errors.houseNo ? 'input-error' : ''}
                    />
                    {errors.houseNo && <span className="error-text">{errors.houseNo.message}</span>}
                </div>

                <div className="form-action-btn">
                    <button type="submit" className="btn-next">
                        Agla Marhala (Next) &rarr;
                    </button>
                </div>
            </form>
        </div>
    );
};

export { Step1BasicInfo };
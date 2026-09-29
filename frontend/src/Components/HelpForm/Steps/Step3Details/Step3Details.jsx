import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step3Schema } from '../../../../Schemas/HelpFormSchema/step3Schema';
import './Step3Details.css';

const Step3Details = ({ category, onBack, onSubmitFinal, isSubmitting }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(step3Schema),
        defaultValues: {
            monthlyIncome: '',
            familyMembers: '',
            instituteName: '',
            classGrade: '',
            diseaseName: '',
            hospitalName: '',
            description: '',
        },
    });

    const onSubmit = (data) => {
        onSubmitFinal(data);
    };

    return (
        <div className="step-card">
            <div className="step-header">
                <span className="step-badge">Marhala 3 az 3</span>
                <h2>Mali wa Zaroori Maloomat</h2>
                <p>Baraye meherbani apni zaroorat ki tafseelat darj karein.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="step-form">
                <div className="input-grid">
                    {/* Kul Mahana Aamdani */}
                    <div className="form-group">
                        <label htmlFor="monthlyIncome">Kul Mahana Aamdani (PKR) *</label>
                        <input
                            id="monthlyIncome"
                            type="number"
                            placeholder="Maslan: 15000 (ya 0)"
                            {...register('monthlyIncome')}
                            className={errors.monthlyIncome ? 'input-error' : ''}
                        />
                        {errors.monthlyIncome && (
                            <span className="error-text">{errors.monthlyIncome.message}</span>
                        )}
                    </div>

                    {/* Ghar ke Afrad */}
                    <div className="form-group">
                        <label htmlFor="familyMembers">Ghar ke Kul Afrad ki Tadaad *</label>
                        <input
                            id="familyMembers"
                            type="number"
                            placeholder="Maslan: 5"
                            {...register('familyMembers')}
                            className={errors.familyMembers ? 'input-error' : ''}
                        />
                        {errors.familyMembers && (
                            <span className="error-text">{errors.familyMembers.message}</span>
                        )}
                    </div>
                </div>

                {/* Dynamic Fields: Education */}
                {category === 'education' && (
                    <div className="input-grid">
                        <div className="form-group">
                            <label htmlFor="instituteName">School / College / Idaray ka Naam</label>
                            <input
                                id="instituteName"
                                type="text"
                                placeholder="Maslan: Govt High School Chak 78 JB"
                                {...register('instituteName')}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="classGrade">Class / Degree</label>
                            <input
                                id="classGrade"
                                type="text"
                                placeholder="Maslan: Matric / FSC / 8th"
                                {...register('classGrade')}
                            />
                        </div>
                    </div>
                )}

                {/* Dynamic Fields: Medical */}
                {category === 'medical' && (
                    <div className="input-grid">
                        <div className="form-group">
                            <label htmlFor="diseaseName">Beemari / Marz ka Naam</label>
                            <input
                                id="diseaseName"
                                type="text"
                                placeholder="Maslan: Gurday / Dil / Operation"
                                {...register('diseaseName')}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hospitalName">Hospital / Doctor ka Naam</label>
                            <input
                                id="hospitalName"
                                type="text"
                                placeholder="Maslan: Allied Hospital Faisalabad"
                                {...register('hospitalName')}
                            />
                        </div>
                    </div>
                )}

                {/* Tafseel / Description */}
                <div className="form-group">
                    <label htmlFor="description">Darkhwast ki Tafseel / Zaroorat ki Wajah *</label>
                    <textarea
                        id="description"
                        rows="4"
                        placeholder="Apne halaat aur zaroorat ki tafseel likhein taake committee behtar faisla kar sakay..."
                        {...register('description')}
                        className={errors.description ? 'input-error' : ''}
                    ></textarea>
                    {errors.description && (
                        <span className="error-text">{errors.description.message}</span>
                    )}
                </div>

                <div className="form-action-btn dual-buttons">
                    <button
                        type="button"
                        onClick={onBack}
                        className="btn-back"
                        disabled={isSubmitting}
                    >
                        &larr; Wapis (Back)
                    </button>
                    <button
                        type="submit"
                        className="btn-next btn-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Jama ho raha hai...' : 'Darkhwast Jama Karein (Submit)'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export { Step3Details };
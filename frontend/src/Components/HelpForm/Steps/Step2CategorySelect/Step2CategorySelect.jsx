import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ASSISTANCE_CATEGORIES, step2Schema } from '../../../../Schemas/HelpFormSchema/step2Schema';
import './Step2CategorySelect.css';

const Step2CategorySelect = ({ defaultCategory, onNext, onBack }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(step2Schema),
        defaultValues: {
            category: defaultCategory || '',
        },
    });

    const selectedCategory = watch('category');

    const onSubmit = (data) => {
        onNext(data.category);
    };

    return (
        <div className="step-card">
            <div className="step-header">
                <span className="step-badge">Marhala 2 az 3</span>
                <h2>Imdad Ki Qisam</h2>
                <p>Aapko kis qisam ki sahoolat ya imdad darkar hai?</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="step-form">
                <div className="form-group">
                    <label htmlFor="category">Sahoolat / Imdad Muntakhib Karein *</label>
                    <select
                        id="category"
                        {...register('category')}
                        className={errors.category ? 'input-error' : ''}
                    >
                        <option value="">-- Imdad Ki Qisam Chunein --</option>
                        {ASSISTANCE_CATEGORIES.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    {errors.category && (
                        <span className="error-text">{errors.category.message}</span>
                    )}
                </div>

                {/* Selected category summary box */}
                {selectedCategory && (
                    <div
                        style={{
                            padding: '0.85rem 1rem',
                            backgroundColor: '#f0fdf4',
                            border: '1px solid #bbf7d0',
                            borderRadius: '8px',
                            marginBottom: '1.25rem',
                        }}
                    >
                        <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 'bold' }}>
                            Muntakhib Karda Category:
                        </span>
                        <p
                            style={{
                                margin: '0.25rem 0 0 0',
                                color: '#15803d',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                            }}
                        >
                            {ASSISTANCE_CATEGORIES.find((c) => c.id === selectedCategory)?.title}
                        </p>
                    </div>
                )}

                <div className="form-action-btn dual-buttons">
                    <button type="button" onClick={onBack} className="btn-back">
                        &larr; Wapis (Back)
                    </button>
                    <button type="submit" className="btn-next">
                        Agla Marhala (Next) &rarr;
                    </button>
                </div>
            </form>
        </div>
    );
};

export { Step2CategorySelect };
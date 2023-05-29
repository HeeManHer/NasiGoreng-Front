import React, { useState } from "react";
import "../review/review.css";

function ReviewModal({ closeModalReview, index }) {
    const [rating, setRating] = useState(0);
    const [images, setImages] = useState([]);

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value);
        setRating(selectedRating);
    };

    const handleImageSelect = (event) => {
        const selectedImage = event.target.files[0];
        if (images.length < 5) {
            setImages([...images, selectedImage]);
        }
    };

    const handleSubmit = () => {
        // index에 대한 리뷰 작성 처리 로직
        // 작성 완료 후 모달 닫기
        closeModalReview();
    };

    const handleCancel = () => {
        // 작성 취소 처리 로직
        // 모달 닫기
        closeModalReview();
    };


    return (
        <div className="reviewmodal center">
            <div className="reviewmodal-header">리뷰 작성</div>
            <div className="reviewmodal-position">
                <div className="reviewmodal-main">별점등록</div>
                <div>
                    <fieldset>
                        <input
                            type="radio"
                            name="rating"
                            value="5"
                            id="rate1"
                            checked={rating === 5}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate1">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            id="rate2"
                            checked={rating === 4}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate2">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            id="rate3"
                            checked={rating === 3}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate3">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            id="rate4"
                            checked={rating === 2}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate4">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            id="rate5"
                            checked={rating === 1}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate5">⭐</label>
                    </fieldset>
                    {rating}/5
                </div>
            </div>
            <div className="reviewmodal-main2">리뷰</div>
            <div>
                <textarea></textarea>
                <div className="imgAndBtn">
                    <h3>이미지첨부</h3>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageSelect}
                        disabled={images.length === 4} // 이미지 개수가 4개에 도달하면 비활성화
                    />
                    <label htmlFor="imageUpload" className="reviewmodal-imgbtn">
                        +
                    </label>
                </div>
                <div className="image-preview-container">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`첨부 이미지 ${index + 1}`}
                            className="reviewmodal-image"
                        />
                    ))}
                </div>
                <div className="reviewmodal-btns">
                    <button className="reviewmodal-btn" onClick={handleSubmit}>
                        작성
                    </button>
                    <button className="reviewmodal-btn" onClick={handleCancel}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewModal;
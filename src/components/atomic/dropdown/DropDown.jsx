import React, { useState, useRef, useEffect } from 'react';
import S from './style'; // 스타일 파일은 아래 3번 항목 참고

const Dropdown = ({ options = [], placeholder = "선택해주세요", onSelect,disabled=false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const dropdownRef = useRef(null);

    // 드롭다운 바깥 클릭 시 닫기 기능
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        if (disabled) return;
        setIsOpen(!isOpen);
    }

    const handleItemClick = (item) => {
        if (disabled) return;
        setSelectedItem(item);
        setIsOpen(false);
        onSelect?.(item); // 부모 컴포넌트로 선택된 값 전달
    };

    return (
        <S.DropdownWrap ref={dropdownRef}>
            <S.DropdownHeader $disabled={disabled} onClick={toggleDropdown} $isOpen={isOpen}>
                {selectedItem ? selectedItem.label : placeholder}
                <S.ArrowIcon $isOpen={isOpen}>▼</S.ArrowIcon>
            </S.DropdownHeader>

            {!disabled && isOpen && (
                <S.DropdownList>
                    {options.map((option) => (
                        <S.DropdownItem
                            key={option.value}
                            onClick={() => handleItemClick(option)}
                        >
                            {option.label}
                        </S.DropdownItem>
                    ))}
                </S.DropdownList>
            )}
        </S.DropdownWrap>
    );
};

export default Dropdown;
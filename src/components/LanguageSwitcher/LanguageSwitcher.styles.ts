import styled from 'styled-components';

export const SwitcherContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    padding: 4px 6px;
    border-radius: 980px;
    border: 1px solid var(--border-color);
`;

export const LangButton = styled.button<{ $isActive: boolean }>`
    background: ${({ $isActive }) => ($isActive ? 'var(--accent-color)' : 'transparent')};
    color: ${({ $isActive }) => ($isActive ? '#fff' : 'var(--text-secondary)')};
    border: none;
    border-radius: 980px;
    padding: 4px 8px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;

    &:hover {
        color: ${({ $isActive }) => ($isActive ? '#fff' : 'var(--text-primary)')};
    }
`;
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const BtnDelete = styled(DeleteForeverIcon)`
  cursor: pointer;
  color: #ff6596;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
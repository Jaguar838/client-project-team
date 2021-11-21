import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const BtnDelete = styled(DeleteForeverIcon)`
  cursor: pointer;
  color: #ff6596;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.2);
  }
`;
import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  border-radius: 5px;
  outline: 1px solid black;
  width: 500px;
  margin-top: 20px;
}
`;

export const ModalHeader = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid black;
  min-width: 500px;
  
}
`;
export const ModalTitle = styled.h5`
margin: 0;
}
`;
export const ModalBtnClose = styled.button`
position: absolute;
  top: 0;
  right: 0;
}
`;

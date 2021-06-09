import React from 'react';
import { Col } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import SubcategoryListItem from './SubcategoryListItem';

const SubcategoryList = ({ subcategoria }) => {
  return (
    <Col className="my-2" xs={6} md={3}>
      <Flip left>
        <SubcategoryListItem subcategoria={subcategoria} />
      </Flip>
    </Col>
  );
};

export default SubcategoryList;

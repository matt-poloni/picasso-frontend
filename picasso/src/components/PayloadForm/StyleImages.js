import React from 'react';
import { Card, Label, CardImg, CardBody, CustomInput } from 'reactstrap';

export default props => {
  return props.styleImages.map(img => 
      <Card
        key={img.id}
        className='rounded-lg'
      >
        <Label className='StyleImage' style={{width: '100%'}} check>
          <CardBody>
            <CustomInput
                type="radio"
                checked={props.activeStyle === `${img.id}`}
                onChange={props.handleStyleSelect}
                id={img.id}
                value={img.id}
                name="style-select"
                label="Select this style"
              />
          </CardBody>
          <CardImg
            bottom
            id={img.id}
            width='100%'
            src={`${props.baseURL}/styles/${img.imageUrl}`}
            alt={img.title}
          />
          <CardBody>
            <p>
              <strong>Title:</strong> {img.title}
            </p>
            <p>
              <strong>Year(s):</strong> {img.year}
            </p>
          </CardBody>
        </Label>
      </Card>);
}
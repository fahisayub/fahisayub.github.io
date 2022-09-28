
import { Container, GridItem, Icon, Text } from '@chakra-ui/react';
import React from 'react';
const SkillTitleItem = ({mtitle,ltitle,rtitle}) => {
    return (
        <GridItem 
  rowSpan={2}
  borderRadius={['.8em','1em','2em']}
  bg='brand_secondary'
  border='4px'
  borderColor='brand'
   colSpan={2}
     > 
     <Container
         transform='rotate(-45deg)'
         my='-20px'
         p='0px'
         pt={['50px','70px']}
         ml={['-15px','5px']}
         maxW={['5em','15em']}
         h={['5em','15em']}
         >
     <Text 
            
            color='brand'
            fontSize={['.8em','1.2em','2.5em']} 
            fontWeight='semibold'>
                {mtitle}
                </Text>

            </Container>
            <Text 
            transform='rotate(360deg)'
            color='brand'
            mx={['25px','50px']}
            my={['30px','-40px']}
            w='4.5em'
            fontSize={['.6em','1em','1.5em']} 
            fontWeight='semibold'>
                {ltitle}
                </Text>
                <Text 
            transform='rotate(270deg)'
            color='brand'
            w='4.5em'
            marginLeft={['55px','145px']}
            my={['-80px','-130px']}
            fontSize={['.6em','1em','1.5em']} 
            fontWeight='semibold'>
                {rtitle}
                </Text>
     </GridItem>
    );
};

const SkillItem = ({children,dis,skill})=>{
    return(<GridItem colSpan={1}
borderRadius={['.6em','.8em','1em']}
overflow='hidden'
bg={dis?'':'green.500'}


 >
    {dis?'':<Container
    transform='rotate(-45deg)'
    margin='auto'
    p='0px'
    pt={['2px','15px']}
    ml={['1px','-1px']}
    maxW={['3em','6em']}
    h={['3em','6em']}
    
    >
         <Text bg='brand_secondary'borderRadius={['.6em','.8em','1em']}
         color='brand'
            transform='rotate(-45deg)'
            w='full'
            pos='fixed'
            my={['2px','2px']}
            mx={['-12px','-25px']}
            fontSize={['.25em','.5em','1em']} fontWeight='semibold'>{skill}</Text>
    <Icon  fontSize={['2.5em','5em']}m='0px'>{children}</Icon>
    </Container>}
    </GridItem>
    );
}

export  {SkillTitleItem,SkillItem};
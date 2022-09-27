import { Container, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import  {F360Icon}  from '../assets/F360Icon'

const TechStacks = () => {

const Skill=({children,dis,title})=>{
    return(
            
           
<GridItem colSpan={1}
borderRadius={['.6em','.8em','1em']}
overflow='hidden'
bg={dis?'':'papayawhip'}
border={dis?'none':'2px'}
borderColor='brand'
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
         <Text bg='brand'borderRadius={['.6em','.8em','1em']}
            transform='rotate(-45deg)'
            w='full'
            pos='fixed'
            my={['2px','2px']}
            mx={['-12px','-25px']}
            fontSize={['.25em','.5em','1em']} fontWeight='semibold'>{title}</Text>
    <Icon  fontSize={['2.5em','5em']}m='0px'>{children}</Icon>
    </Container>}
    </GridItem>
    );
}

    return (
        <Grid
  h={['300px','500px','700px']}maxW={['300px','500px','700px']}
  m='auto'
  transform="rotate(45deg)"
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(6, 1fr)'
  gap={[2,3,4]}
>
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
         pt={['2px','50px']}
         ml={['1px','5px']}
         maxW={['5em','15em']}
         border='1px solid white'
         h={['5em','15em']}
         >
     <Text 
            
            color='brand'
            border='1px solid white'
            fontSize={['.8em','1.2em','2.5em']} 
            fontWeight='semibold'>
                Tech Stacks
                </Text>

            </Container>
            <Text 
            transform='rotate(360deg)'
            color='brand'
            mx='50px'
            my='-40px'
            fontSize={['.5em','1em','1.5em']} 
            fontWeight='semibold'>
                Frontend
                </Text>
                <Text 
            transform='rotate(270deg)'
            border='1px solid white'
            color='brand'
            marginLeft='120px'
            my='-150px'
            fontSize={['.5em','1em','1.5em']} 
            fontWeight='semibold'>
                Backend
                </Text>
     </GridItem>



  <Skill   >                                    2</Skill>
  <Skill   >                                    3</Skill>
  <Skill  dis='none'>                           4</Skill>
  <Skill  dis='none' >                          5</Skill>
  <Skill   >                                    6</Skill>
  <Skill   >                                    7</Skill>
  <Skill   >                                    8</Skill>
  <Skill   dis='none'>                          9</Skill>
  <Skill   >                                   10</Skill>
  <Skill   >                                   11</Skill>
  <Skill  dis='none'>                          12</Skill>
  <Skill   >                                   13</Skill>
  <Skill   >                                   14</Skill>
  <Skill   >                                   15</Skill>
  <Skill   >                                   16</Skill>
  <Skill   >                                   17</Skill>
  <Skill   >                                   18</Skill>
  <Skill  dis='none' >                         19</Skill>
  <Skill   >                                   20</Skill>
  <Skill   >                                   21</Skill>
  <Skill  dis='none'>                          22</Skill>
  <Skill   >                                   23</Skill>
  <Skill   >                                   24</Skill>
  <Skill   >                                   25</Skill>
  <Skill  dis='none' >                         26</Skill>
  <Skill  dis='none' >                         27</Skill>
  <Skill  dis='none' >                         28</Skill>
  <Skill  dis='none'>                          29</Skill>
  <Skill   >                                   30</Skill>
  <Skill   >                                   31</Skill>
  <Skill  dis='none' >                         32</Skill>
  <Skill  dis='none' >                         33</Skill>
</Grid>
    );
};

export default TechStacks;
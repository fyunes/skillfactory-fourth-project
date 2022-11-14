import shopApp from '../images/shop-app.png';
import { Link as RouterLink } from 'react-router-dom';
import { Image, Flex, Input, Text, Link, Icon, Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaRebel, FaTelegramPlane } from 'react-icons/fa'


const Footer = () => {
  return (
    <Flex
      w='100%' maxW='1200px' h='100%'
      color='gray.600'
      flexDir={{base:'column', md:'row'}} alignContent='center' justifyContent='center'
      px={5} py={4}
    >
      {/* ********************** */}
      <Flex className='box1'
        w={{base:'100%', md:'35%'}} h='100%'
        py='4'
        flexDir='column' alignItems={{base:'center', md:'start'}} justifyContent='space-between'>
        <Image
          w={{ base: '120px', sm:'100px', md: '100px' }}
          pb='1'
          src={shopApp} alt='Logo'
        />
        <Flex gap={{base:'3', md:'3'}} py='1'>
          <Icon as={ FaFacebookSquare } 
          w='25px' h='25px' color='gray.500'
          _hover={{
            color:'blue.shop'
          }}
          />
          <Icon as={ FaInstagramSquare } 
          w='25px' h='25px' color='gray.500'
          _hover={{
            color:'blue.shop'
          }}
          />
          <Icon as={ FaTwitterSquare } 
          w='25px' h='25px' color='gray.500'
          _hover={{
            color:'blue.shop'
          }}
          />
        </Flex>
        <Flex pt='1'>
          <Text fontSize='.7em' color='gray.500'>
            © All rights reserved
          </Text>
        </Flex>
      </Flex>
      {/* ********************** */}
      <Flex className='box2'
        w={{base:'100%', md:'35%'}} h='100%'
        fontSize='.8em' color='gray.500'
        py='4'
        flexDir='column' alignItems={{base:'center', md:'start'}} justifyContent='space-between'
        >
          <Text fontSize='1.2em' pb='1' color='gray.600'>
            CONTACT US
          </Text>
          <Link
            style={{ textDecoration: 'none' }}       
            as={RouterLink} to=''
            _hover={{
              color:'blue.shop',
            }}>
            <Text>lucasranch@skywalker.com</Text>          
          </Link>
          <Flex alignItems='center'>
            <Icon as={ FaRebel } 
              w='13px' h='13px' mr='5px' color='gray.600'
              _hover={{
              color:'blue.shop'
              }}
            />
            <Text>Skywalker Ranch</Text>
          </Flex>
          <Text>Lucas Valley-Marinwood, CA - 94946</Text>          
      </Flex>
      {/* ********************** */}
      <Flex className='box3'
        w={{base:'100%', md:'30%'}} h='100%'
        fontSize='.8em'
        color='gray.500'
        py='4'
        flexDir='column' alignItems={{base:'center', md:'start'}} justifyContent='space-between'
        >
          <Text fontSize='1.2em' pb='1' color='gray.600'>
            SUBSCRIBE NOW
          </Text>
          <Text>
            Sign up if you want to get notifications
          </Text>
          <InputGroup size='sm'>
            <Input
              borderColor='gray.300'
              placeholder='Enter you e-mail'
              _placeholder={{color:'gray.400'}} 
              focusBorderColor='blue.shop'
            />
            <InputRightElement w='3em'>
              <Button w='2.8rem'h='1.75rem' 
              mr='1.5px' size='sm' bg='blue.shop'                
              >
              <Icon as={ FaTelegramPlane } 
                w='13px' h='13px'
                color='white'                
              />                  
              </Button>
            </InputRightElement>
          </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Footer;

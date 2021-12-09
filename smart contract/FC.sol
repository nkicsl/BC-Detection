pragma solidity ^0.4.0;

contract Feedback{
    
    address addr;
    
    bytes32 logkey;
    
    function Excute(address _addr, bytes32 _logkey) public{
        
        addr = _addr;
        
        logkey = _logkey;
        
        return;
    }
    
    function GetError() public constant returns(address _addr, bytes32 _logkey){
        
        _addr = addr;
        
        _logkey = logkey;
    }
}
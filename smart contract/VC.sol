pragma solidity ^0.4.0;

contract Register{
    
    function Credibility(address _addr) public constant returns(bool _res);
}

contract DeviceSnapshot{
    
    function Lastlogkey(address _addr) public constant returns(bytes32 _res);
    
    function SetLogkey(address _addr, bytes32 _logkey) public;
}

contract WorkFlow{
    
    function FindNode(bytes32 _nodevalue) public constant returns(uint8 _res);
    
    function GetEdge(uint8 _first, uint8 _second) public constant returns(uint8 _res);
}

contract Feedback{
    
    function Excute(address _addr, bytes32 _logkey) public;
}

contract Verify{
    
    string res;
    
    uint8 exist;
    
    function Detect(address _dsc, address _wfc, address _addr, bytes32 _logkey) public {
        
        bytes32 _llk = DeviceSnapshot(_dsc).Lastlogkey(_addr);
            
        if(_llk == ""){
                
            DeviceSnapshot(_dsc).SetLogkey(_addr,_logkey);
            
            res = "System is running normally";
        }
        else{
            
            uint8 _first = WorkFlow(_wfc).FindNode(_llk);
            
            uint8 _second = WorkFlow(_wfc).FindNode(_logkey);
            
            uint8 _exist = WorkFlow(_wfc).GetEdge(_first,_second);
            
            exist = _exist;
            
            if(_exist == 0){
                
                res = "System occusrs an exception";
            }
            else if(_exist == 1){
                
                DeviceSnapshot(_dsc).SetLogkey(_addr,_logkey);
                
                res = "System is running normally";
            }
        } 
    }
    
    function GetRes() public constant returns(string _res){
        
        _res = res;
    } 
    
    function Exist() public constant returns(uint8 _res){
        
        _res = exist;
    } 
}
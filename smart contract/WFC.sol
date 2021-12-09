pragma solidity ^0.4.0;

contract WorkFlow{
    
    uint8 NodeCount;
    
    mapping(uint8 => bytes32) public Node;
    
    mapping(uint8 => mapping(uint8 => uint8)) public Graph;
    
    //Determine if a specific node exists
    function FindNode(bytes32 _nodevalue) public constant returns(uint8 _res){
        
        _res = 255;
        
        for(uint8 i = 0; i < NodeCount; i++){
            
            if(keccak256(Node[i]) == keccak256(_nodevalue)){
                
                _res = i;
            }
        }
    }
    
    //AI server upload the node info of workflow graph
    function UploadNode(bytes32 _nodevalue) public {
        
        if(FindNode(_nodevalue) == 255){
            
            NodeCount++;
            
            Node[NodeCount - 1] = _nodevalue;
        }
    }
    
    //AI server upload the edge info of workflow graph
    function UploadEdge(uint8 _first, uint8 _second, uint8 _relation) public {
        
        Graph[_first][_second] = _relation;
    }
    
    function GetNodeCount() public constant returns(uint8 _res){
        
        _res = NodeCount;
    }
    
    function GetNode(uint8 _nodeindex) public constant returns(bytes32 _res){
        
        _res = Node[_nodeindex];
    }
    
    function GetEdge(uint8 _first, uint8 _second) public constant returns(uint8 _res){
        
        _res = Graph[_first][_second];
    }
}
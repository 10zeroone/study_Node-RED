module.exports = function(RED) {
    function LowerCaseNode(config) {
    	// 노드 생성
    	// config: flow편집창에서 설정한 정보가 입력이 됩니다.
        RED.nodes.createNode(this,config);
        
        var node = this;
        
        // 입력이벤트 발생시 소문자로 변경하여 노드에 전달
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    
    // "lower-case"라는 이름으로 노드를 등록하고 등록이 완료되면
    // 등록된 LowerCaseNode 함수를 실행합니다.
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
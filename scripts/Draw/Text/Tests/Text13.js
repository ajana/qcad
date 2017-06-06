// Auto generated by Testing Dashboard
// File        : scripts/Draw/Text/Tests/Text13.js
// Timestamp   : 2015-10-05 16:34:35
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function Text13() {
    TdbTest.call(this, 'scripts/Draw/Text/Tests/Text13.js');
}

Text13.prototype = new TdbTest();

Text13.prototype.test00 = function() {
    qDebug('running Text13.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Text/Tests/data/text13.dxf');
    this.selectAll();
    this.triggerCommand('explode');
    this.verifyDrawing('Text13_000.dxf');
    this.triggerCommand('explode');
    this.deselectAll();
    this.verifyDrawing('Text13_001.dxf');
    this.tearDown();
    qDebug('finished Text13.test00()');
};


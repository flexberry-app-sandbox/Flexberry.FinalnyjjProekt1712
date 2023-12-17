




CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 КодСот INT NOT NULL,
 Фамилия VARCHAR(255) NOT NULL,
 Имя VARCHAR(255) NOT NULL,
 Отчество VARCHAR(255) NOT NULL,
 СерияПас INT NULL,
 НомерПас INT NULL,
 Должности UUID NOT NULL,
 Отделы UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 КодДол INT NOT NULL,
 Наименование VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГрафикиОтпуска (
 primaryKey UUID NOT NULL,
 НомерДок INT NULL,
 Дата TIMESTAMP(3) NULL,
 Отправлено BOOLEAN NULL,
 ДатаНач TIMESTAMP(3) NULL,
 КолДней INT NULL,
 ДирПерсонала UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасчетныйЛист (
 primaryKey UUID NOT NULL,
 НомерДок INT NULL,
 Дата TIMESTAMP(3) NULL,
 Отправлено BOOLEAN NULL,
 ИтогоНачис DOUBLE PRECISION NULL,
 ИтогоУдержано DOUBLE PRECISION NULL,
 ИтогоКПеречи DOUBLE PRECISION NULL,
 ДирПерсонала UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставРасчета (
 primaryKey UUID NOT NULL,
 Тип VARCHAR(10) NULL,
 Взносы DOUBLE PRECISION NULL,
 Наименование VARCHAR(255) NULL,
 Сумма DOUBLE PRECISION NULL,
 Ндфл DOUBLE PRECISION NULL,
 Всего DOUBLE PRECISION NULL,
 РасчетныйЛист UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Отделы (
 primaryKey UUID NOT NULL,
 КодОтдела INT NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Согласие (
 primaryKey UUID NOT NULL,
 НомерДок INT NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Подписано BOOLEAN NULL,
 Отправлено BOOLEAN NULL,
 Сотрудники UUID NOT NULL,
 ДирПерсонала UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДирПерсонала (
 primaryKey UUID NOT NULL,
 Код INT NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сотрудники ADD CONSTRAINT FKe5ecf5036053539899cbfb65cf7383292844b1ec FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexe5ecf5036053539899cbfb65cf7383292844b1ec on Сотрудники (Должности); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FK3f0a97d2a7b05bd9e547ef58fd6ff8078d06ec89 FOREIGN KEY (Отделы) REFERENCES Отделы; 
CREATE INDEX Index3f0a97d2a7b05bd9e547ef58fd6ff8078d06ec89 on Сотрудники (Отделы); 

 ALTER TABLE ГрафикиОтпуска ADD CONSTRAINT FK28ef52ad32de38515f813982bbebf0e67ce2075a FOREIGN KEY (ДирПерсонала) REFERENCES ДирПерсонала; 
CREATE INDEX Index28ef52ad32de38515f813982bbebf0e67ce2075a on ГрафикиОтпуска (ДирПерсонала); 

 ALTER TABLE ГрафикиОтпуска ADD CONSTRAINT FKd5500206319d6df75d0689cd21ee09cc755424ba FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexd5500206319d6df75d0689cd21ee09cc755424ba on ГрафикиОтпуска (Сотрудники); 

 ALTER TABLE РасчетныйЛист ADD CONSTRAINT FKece4054d8caf673f100a48272c528513403aa287 FOREIGN KEY (ДирПерсонала) REFERENCES ДирПерсонала; 
CREATE INDEX Indexece4054d8caf673f100a48272c528513403aa287 on РасчетныйЛист (ДирПерсонала); 

 ALTER TABLE РасчетныйЛист ADD CONSTRAINT FK976df54fd7b4c696fc726b54ee5e2e9e4eec346b FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index976df54fd7b4c696fc726b54ee5e2e9e4eec346b on РасчетныйЛист (Сотрудники); 

 ALTER TABLE СоставРасчета ADD CONSTRAINT FKe4b8ba9621180eb5596826ae598c571be265cb4e FOREIGN KEY (РасчетныйЛист) REFERENCES РасчетныйЛист; 
CREATE INDEX Indexe4b8ba9621180eb5596826ae598c571be265cb4e on СоставРасчета (РасчетныйЛист); 

 ALTER TABLE Согласие ADD CONSTRAINT FK57548399bcd07446042e8d5a4b9b3abe8ac0be20 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index57548399bcd07446042e8d5a4b9b3abe8ac0be20 on Согласие (Сотрудники); 

 ALTER TABLE Согласие ADD CONSTRAINT FK252a32d40337c378d734653c99e8b8af48e55bb3 FOREIGN KEY (ДирПерсонала) REFERENCES ДирПерсонала; 
CREATE INDEX Index252a32d40337c378d734653c99e8b8af48e55bb3 on Согласие (ДирПерсонала); 

 ALTER TABLE ДирПерсонала ADD CONSTRAINT FK95e9f570ab99dd9bdedbf43e76d0e82e8ff251d0 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index95e9f570ab99dd9bdedbf43e76d0e82e8ff251d0 on ДирПерсонала (Сотрудники); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 


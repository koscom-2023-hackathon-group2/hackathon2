INSERT INTO member
(id, password, created_at, updated_at)
VALUES
    ('jiye1', '1',current_timestamp , current_timestamp ),
    ('jiye2', '1',current_timestamp , current_timestamp ),
    ('jiye3', '1',current_timestamp , current_timestamp ),
    ('jiye4', '1',current_timestamp , current_timestamp );

INSERT INTO STOCK_INFO
(ITEM_NAME, stock_Number, stock_Market, stock_Price, rate_Of_Return)
VALUES
    ('CJ', '001040', 'KOSPI', 77400, -2.42),
    ('HD현대',	'267250',	'KOSPI',	61400,	0.00),
    ('KB금융',	'105560',	'KOSPI',	51800,	0.39),
    ('KT',	'030200',	'KOSPI',	32000,	1.25),
    ('LG',	'003550',	'KOSPI',	83200,	-1.08),
    ('LG화학',	'051910'	,'KOSPI',	631000,	-1.89),
    ('SK이노베이션',	'096770',	'KOSPI',	191600,	0.00),
    ('고려아연',	'010130',	'KOSPI',	500000,	0.20),
    ('남양유업',	'003920',	'KOSPI',	441500,	3.28),
    ('삼성전자',	'005930',	'KOSPI',	68400,	-0.74),
    ('KCC',	'002380',	'KOSPI',	213000,	1.41),
    ('KG케미칼',	'001390',	'KOSPI',	41800,	3.00),
    ('KPX홀딩스',	'092230',	'KOSPI',	49900,	-0.20),
    ('동원산업',	'006040',	'KOSPI',	39050,	-1.66),
    ('삼성SDI',	'006400',	'KOSPI',	626000,	1.77);

INSERT INTO ETF_INFO
(ITEM_NAME, stock_Number, stock_Market, stock_Price, rate_Of_Return)
VALUES
    ('ACE 국고채3년',	'114460',	'ETF',	101730,	0.01),
    ('ACE 미국다우존스리츠(합성 H)',	'181480',	'ETF',	76580,	0.00),
    ('ACE 종합채권(AA-이상)KIS액티브',	'356540',	'ETF',	95570,	-0.16),
    ('ACE 중장기국공채액티브',	'272910',	'ETF',	98035,	-0.06),
    ('ARIRANG KOFR금리',	'453010',	'ETF',	101455,	0.01),
    ('KODEX 코스피',	'226490',	'ETF',	26525,	-0.62),
    ('KOSEF 200TR',	'294400',	'ETF',	42595,	-0.28),
    ('KOSEF 물가채KIS',	'430500',	'ETF',	105530,	-0.26),
    ('KTOP 단기금융채액티브',	'463290',	'ETF',	100195,	0.03),
    ('SOL 24-06 국고채액티브',	'449540',	'ETF',	102565,	0.01),
    ('SOL 국고채3년',	'438560',	'ETF',	102900,	-0.02),
    ('TIGER 200',	'102110',	'ETF',	34165,	-0.21),
    ('TIGER 23-12 국공채액티브',	'447780',	'ETF',	205970,	0.02),
    ('TIGER KOFR금리액티브(합성)',	'449170',	'ETF',	102460,	0.03),
    ('히어로즈 CD금리액티브(합성)',	'458210',	'ETF',	100855,	0.03);

INSERT INTO ACCOUNT
(CASH_ASSET, FAKE_ACCOUNT_ID, NICKNAME, REAL_ACCOUNT_ID)
VALUES
    (185000000L, '7d7fc936-1528-4e2a-953b-0116d8efabd2', '코스모스', '76b0edbe-fafb-476f-a1a7-f361f430820b'),
    (185000000L, '1d7fc996-1528-4e2a-953b-0116d8efabd1', '지예원투쓰리포', '32b0edbe-fafb-476f-a1a7-f361f430820d');

INSERT INTO ACCOUNT_INFO
(ACCOUNT_INFO_STATUS, ACCOUNT_SEQ, MEMBER_SEQ)
VALUES
    ('HOST', 1, 1),
    ('HOST', 2, 3);

INSERT INTO DEPOSIT_ACCOUNT
(ACCOUNT_ID, BANK_TYPE, MEMBER_ID)
VALUES
    ('123', 'KB', 'jiye1'),
    ('456', 'NH', 'jiye3');

INSERT INTO INVITE
(HOST_ID, INVITEE_ID, ACCOUNT, NICKNAME)
VALUES
    ('jiye1', 'jiye2', '7d7fc936-1528-4e2a-953b-0116d8efabd2', '코스모스'),
    ('jiye3', 'jiye2', '1d7fc996-1528-4e2a-953b-0116d8efabd1', '지예원투쓰리포');
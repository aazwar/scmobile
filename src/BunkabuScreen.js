import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, ScrollView } from 'react-native';
import { Container, Content, ListItem, Tab, Tabs } from 'native-base';
import HTML from 'react-native-render-html';

import style, { RightList } from './Styles';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'مطبوعات الملحقية',
  };

  render() {
    return (
      <Container>
        <Tabs ref={component => (this._tabs = component)} initialPage={0}>
          <Tab heading="挨拶">
            <Attache />
          </Tab>
          <Tab heading="ミッション">
            <Vision />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

class Vision extends React.Component {
  render() {
    return (
      <Content padder>
        <Text style={style.title}>文化部のミッション</Text>
        <Text style={style.jparagraph}>
          2008年7月、東京に設立された在日サウジアラビア王国大使館 文化部では下記4つの ミッションの下に活動をおこなっております。{
            '\n'
          }
        </Text>
        <Text style={style.jheader}>日本とサウジアラビアの文化交流を促進</Text>
        <Text style={style.jparagraph}>
          文化部スタッフと留学生で各自治体や小学校などを訪問し、直接触れ合うことで相互の文化の理解や親交を深めることができます。{
            '\n'
          }
        </Text>
        <Text style={style.jheader}>在日留学生の日本での生活を手厚くサポート</Text>
        <Text style={style.jparagraph}>
          勉学に集中できる環境を提供しアブドラ国王留学金プログラムを通し、サウジアラビアの人材開発の一翼を担っております。{'\n'}
        </Text>
        <Text style={style.jheader}>日本とサウジアラビアの大学・研究機関間における協力体制構築</Text>
        <Text style={style.jparagraph}>
          {' '}
          日本とサウジアラビアの大学・教育機関間での人材交流や技術提携等を目的とした協力体制構築がスムーズに行えるよう、ご助力致します。{
            '\n'
          }
        </Text>

        <Text style={style.jheader}>日本企業・機関のノウハウ・技術を活用し、サウジアラビア国産イノベーション能力の構築</Text>
        <Text style={style.jparagraph}>
          国庫収入の大部分を石油収入に依存しているサウジアラビアにおいて新たな試みとして、日本企業・機関の保持している優れたノウハウ・技術を活用し、サウジアラビア国産イノベーション能力の構築が進められています。その構築に人材開発という形で貢献しています。{
            '\n'
          }
        </Text>
      </Content>
    );
  }
}

class Attache extends React.Component {
  render() {
    return (
      <Content padder>
        <Text style={style.jheader}>駐日サウジアラビア王国大使館文化アタッシェ 就任挨拶</Text>

        <Text style={style.jparagraph}>
          サウジアラビア王国国費奨学生及び私費留学生の皆さん、サウジアラビア大使館文化部は、全スタッフが総力を合わせ能う限りを尽くす専門家集団であり、サウジアラビア政府が提供する国費留学生への特別な便宜・措置によって、又、士気高く努力する皆さんが志を遂げ目的を達成する為に用意された柔軟な対応や報奨内容を含む国費奨学金プログラムによって、皆さんを保護し、学業面の指導、生活面の支援をし、又は鼓舞激励して学業の途で皆さんが直面し得るあらゆる困難を取り除くべく全力を挙げてサポートする為にあるということを覚えておいて下さい。{
            '\n'
          }
        </Text>

        <Text style={style.jparagraph}>
          さて皆さん、「サウジアラビア王国2030年構想」によって母国は今、大きな転換点を目の前にしていることを認識して下さい。この構想は包括的且つ実質的にサウジアラビア王国の輝かしい将来像を描いた壮大なビジョンであり、あらゆる分野における具体的な実施方途を明らかにした諸計画・取り組みが設定されており、この程政府はヒジュラ暦1437年9月（西暦2016年6月）初旬、本構想から生まれた計画の一つ“2020年構造転換”を閣議決定しました。これを受けて各省庁が実施計画・取り組み内容を次々と発表、明確な施策・推進方途を打ち出しました。{
            '\n'
          }
        </Text>

        <Text style={style.jparagraph}>
          ここで私が特に指摘したいのは、本構想の最重要目標の一つと位置づけられた“専門性・創造性に富む有能な人材を頼みとする知識経済への移行”です。つまり、この創造性と知識・技術の横溢する日本で学んでいる皆さんは、近い将来、本構想の実現に先陣を切って参与・参画するということを銘記して頂きたいのです。まずは、サウジアラビア王国2030年構想のWebSiteを開いて下さい、そして特に自分の専攻分野に関連する目標や計画内容を重点的に確認し、これから習得する専門知識・技術が将来活かせるよう、しっかりと熟読して下さい。{
            '\n'
          }
        </Text>

        <Text style={style.jparagraph}>
          なお、日本の方々は皆さんを見てサウジアラビアという国、その社会・文化・倫理道徳を知るのですから、歴史を誇り、偉大な宗教を抱き、経済的・政治的影響力のある大国たる母国を自らが代表していることを肝に銘じて学業研究に勤しんで下さい。文化部は、その重要な任務の一つである、科学・文化面におけるサウジアラビアと日本の協力関係の一層の緊密化に向けて、両国関係省庁・関係機関と連携し、両国に資するよう、相互理解と学術成果の共有を進め、両国民の友情の絆が深まっていくことを願っています。{
            '\n'
          }
        </Text>

        <Text style={style.jparagraph}>
          最後になりましたが、この度ヒジュラ暦1437年9月1日（西暦2016年6月6日）付けでサウジアラビア王国大使館文化アタッシェに着任し、教育省Dr.アフマド・イブン･ムハンマド・アルイーサー大臣からの御信任を受け、身に余る光栄と深甚なる感謝の意を表したいと存じます。アッラーに佑助を請い、この職責を全うさせて頂く所存でございます。またこの場を借りて、駐日サウジアラビア王国大使館アフマド・イブン・ユーヌス・アルバッラーク特命全権大使はじめ大使館幹部職員の皆様そして教育省幹部職員の皆様に、文化部及び日本留学中のサウジ学生に対して常なる御支援を賜っておりますことを心より感謝致したいと存じます。{
            '\n'
          }
        </Text>

        <Text style={style.jparagraph}>駐日サウジアラビア王国大使館文化アタッシェ{'\n'}</Text>

        <Text style={style.jparagraph}>Prof.　カーリド・イブン・アブドルラフマン・アルファラハーン{'\n'}</Text>
      </Content>
    );
  }
}

export const gost = `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" default-locale="ru-RU">
  <info>
    <title>Russian GOST R 7.0.5-2008 (Ру́сский)</title>
    <id>http://www.zotero.org/styles/gost-r-7-0-5-2008</id>
    <link href="http://www.zotero.org/styles/gost-r-7-0-5-2008" rel="self"/>
    <link href="http://chetvericov.ru/stil-oformleniya-dlya-mendeley-i-zotero-csl-po-gost-r-705-2008/" rel="documentation"/>
    <link href="http://protect.gost.ru/document.aspx?control=7&amp;id=173511" rel="documentation"/>
    <author>
      <name>Andrey Chetverikov</name>
      <email>andrey@chetvericov.ru</email>
      <uri>http://chetvericov.ru</uri>
    </author>
    <category citation-format="author-date"/>
    <category field="generic-base"/>
    <summary>Russian GOST-2008 style.</summary>
    <updated>2021-04-23T08:29:37+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <macro name="editor">
    <names variable="editor" prefix="/ под ред. " delimiter=", " suffix=".">
      <name initialize-with=". " sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>
    </names>
  </macro>
  <macro name="author">
    <names variable="author">
      <name name-as-sort-order="all" sort-separator=" " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
      <label form="short" prefix=" " text-case="lowercase"/>
    </names>
  </macro>
  <macro name="author_short">
    <names variable="author">
      <name form="short" name-as-sort-order="all" sort-separator=" " delimiter=", " delimiter-precedes-last="always"/>
      <substitute>
        <text variable="title"/>
      </substitute>
    </names>
  </macro>
  <macro name="access">
    <choose>
      <if variable="URL">
        <text value="[Электронный ресурс]. "/>
        <text variable="URL" prefix="URL: "/>
        <group prefix=" (" suffix=")">
          <text term="accessed" suffix=": "/>
          <date variable="accessed">
            <date-part name="day" suffix="." form="numeric-leading-zeros"/>
            <date-part name="month" suffix="." form="numeric-leading-zeros"/>
            <date-part name="year"/>
          </date>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="title">
    <text variable="title"/>
  </macro>
  <macro name="publisher">
    <group>
      <text variable="publisher-place"/>
      <text value=": "/>
      <text variable="publisher"/>
    </group>
    <text macro="year-date" suffix="." prefix=", "/>
    <text variable="edition" prefix=" Вып. "/>
  </macro>
  <macro name="year-date">
    <date variable="issued">
      <date-part name="year"/>
    </date>
  </macro>
  <macro name="language-sort">
    <text variable="note"/>
    <text value="Z999"/>
  </macro>
  <macro name="citation-number">
    <text variable="citation-number" suffix=". "/>
  </macro>
  <citation et-al-min="4" et-al-use-first="1" disambiguate-add-year-suffix="true">
    <sort>
      <key macro="language-sort"/>
      <key macro="author"/>
      <key variable="issued"/>
    </sort>
    <layout prefix="[" suffix="]" delimiter="; ">
      <text macro="author_short" suffix=", "/>
      <text macro="year-date"/>
      <text variable="locator" prefix=", с. "/>
    </layout>
  </citation>
  <locale xml:lang="en">
    <terms>
      <term name="et-al">и др.</term>
      <term name="editor" form="verb">под ред.</term>
      <term name="accessed">дата обращения</term>
    </terms>
  </locale>
  <locale xml:lang="ru">
    <terms>
      <term name="et-al">и др.</term>
      <term name="editor" form="verb">под ред.</term>
      <term name="accessed">дата обращения</term>
    </terms>
  </locale>
  <bibliography et-al-min="4" et-al-use-first="1">
    <sort>
      <key macro="language-sort"/>
      <key macro="author"/>
      <key variable="issued"/>
    </sort>
    <layout suffix=".">
      <text macro="citation-number"/>
      <text macro="author" suffix=". "/>
      <choose>
        <if type="bill book graphic legal_case legislation motion_picture report song" match="any">
          <group delimiter=". ">
            <group delimiter=" ">
              <text macro="title"/>
              <text macro="editor"/>
            </group>
            <text macro="publisher"/>
            <text variable="number-of-pages" suffix=" с."/>
          </group>
        </if>
        <else-if type="chapter paper-conference" match="any">
          <group prefix=" " delimiter=". ">
            <group delimiter=" ">
              <text macro="title"/>
              <text variable="container-title" prefix="// "/>
              <text variable="collection-title" prefix=" " suffix="."/>
              <text macro="editor"/>
            </group>
            <text macro="publisher"/>
            <text prefix="С. " variable="page"/>
          </group>
        </else-if>
        <else-if type="webpage post-weblog" match="any">
          <text macro="title" prefix=" "/>
          <text prefix=" " macro="access"/>
        </else-if>
        <else-if type="article-journal article-magazine article-newspaper broadcast interview manuscript map patent personal_communication speech thesis" match="any">
          <text macro="title" prefix=" "/>
          <group delimiter=". " prefix=" " suffix=".">
            <group prefix="// " delimiter=". ">
              <text variable="container-title" form="short"/>
              <text macro="year-date"/>
              <text variable="volume" prefix="Т. "/>
              <text variable="issue" prefix="№ "/>
            </group>
            <text variable="page" prefix="С. "/>
          </group>
        </else-if>
        <else>
          <text macro="title" prefix=" "/>
          <group delimiter=". " prefix=" " suffix=".">
            <group prefix="// " delimiter=". ">
              <text variable="container-title" form="short"/>
              <text macro="year-date"/>
              <text variable="volume" prefix="Т. "/>
              <text variable="issue" prefix="№ "/>
            </group>
            <text variable="page" prefix="С. "/>
          </group>
        </else>
      </choose>
    </layout>
  </bibliography>
</style>`
package Finalnyjj_proekt1712.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Finalnyjj_proekt1712.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РасчетныйЛист
 */
@Entity(name = "IISFinalnyjj_proekt1712РасчетныйЛист")
@Table(schema = "public", name = "РасчетныйЛист")
public class RaschetnyjList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерДок")
    private Integer номердок;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Отправлено")
    private Boolean отправлено;

    @Column(name = "ИтогоНачис")
    private Double итогоначис;

    @Column(name = "ИтогоУдержано")
    private Double итогоудержано;

    @Column(name = "ИтогоКПеречи")
    private Double итогокперечи;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DirPersonala")
    @Convert("DirPersonala")
    @Column(name = "ДирПерсонала", length = 16, unique = true, nullable = false)
    private UUID _dirpersonalaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DirPersonala", insertable = false, updatable = false)
    private DirPersonala dirpersonala;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavRascheta> sostavraschetas;


    public RaschetnyjList() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерДок() {
      return номердок;
    }

    public void setНомерДок(Integer номердок) {
      this.номердок = номердок;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Boolean getОтправлено() {
      return отправлено;
    }

    public void setОтправлено(Boolean отправлено) {
      this.отправлено = отправлено;
    }

    public Double getИтогоНачис() {
      return итогоначис;
    }

    public void setИтогоНачис(Double итогоначис) {
      this.итогоначис = итогоначис;
    }

    public Double getИтогоУдержано() {
      return итогоудержано;
    }

    public void setИтогоУдержано(Double итогоудержано) {
      this.итогоудержано = итогоудержано;
    }

    public Double getИтогоКПеречи() {
      return итогокперечи;
    }

    public void setИтогоКПеречи(Double итогокперечи) {
      this.итогокперечи = итогокперечи;
    }


}